import pandas as pd
import numpy as np

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status
)

from sqlalchemy.orm import Session

from prophet import Prophet

from sklearn.metrics import (
    mean_absolute_percentage_error
)

from app.database import get_db

from app.models.dataset import Dataset
from app.models.user import User

from app.auth.oauth2 import get_current_user


router = APIRouter(
    prefix="/forecast",
    tags=["Forecast"]
)


# ==================================
# FORECAST PREDICTION API
# ==================================

@router.get("/predict")
def predict_future_sales(

    future_months: int = 6,

    category: str = None,

    product: str = None,

    db: Session = Depends(get_db),

    current_user: User = Depends(
        get_current_user
    )
):

    # ============================
    # VALIDATE INPUT
    # ============================

    if future_months <= 0:

        raise HTTPException(

            status_code=status.HTTP_400_BAD_REQUEST,

            detail="future_months must be greater than 0"
        )

    # ============================
    # GET LATEST DATASET
    # ============================

    dataset = db.query(Dataset).filter(

        Dataset.uploaded_by == current_user.id

    ).order_by(

        Dataset.created_at.desc()

    ).first()

    if not dataset:

        raise HTTPException(

            status_code=status.HTTP_404_NOT_FOUND,

            detail="No dataset found"
        )

    # ============================
    # READ DATASET
    # ============================

    try:

        if dataset.file_path.endswith(".csv"):

            df = pd.read_csv(
                dataset.file_path
            )

        else:

            df = pd.read_excel(
                dataset.file_path
            )

    except Exception as e:

        raise HTTPException(

            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,

            detail=f"Error reading dataset: {str(e)}"
        )

    # ============================
    # CLEAN COLUMN NAMES
    # ============================

    df.columns = df.columns.str.strip()

    # ============================
    # DETECT REQUIRED COLUMNS
    # ============================

    date_column = None
    sales_column = None

    category_column = None
    product_column = None

    price_column = None
    units_column = None

    for col in df.columns:

        col_name = col.lower().strip()

        # DATE COLUMN

        if "date" in col_name:

            date_column = col

        # SALES COLUMN

        if (

            "sales" in col_name
            or "revenue" in col_name
            or "amount" in col_name
            or "income" in col_name
        ):

            sales_column = col

        # CATEGORY COLUMN

        if "category" in col_name:

            category_column = col

        # PRODUCT COLUMN

        if "product" in col_name:

            product_column = col

        # PRICE COLUMN

        if "price" in col_name:

            price_column = col

        # UNITS COLUMN

        if "unit" in col_name:

            units_column = col

    # =========================================
    # CREATE SALES COLUMN USING PRICE * UNITS
    # =========================================

    if sales_column is None:

        if price_column and units_column:

            df["Generated_Sales"] = (

                pd.to_numeric(
                    df[price_column],
                    errors="coerce"
                )

                *

                pd.to_numeric(
                    df[units_column],
                    errors="coerce"
                )
            )

            sales_column = "Generated_Sales"

    # ============================
    # REQUIRED CHECK
    # ============================

    if not date_column or not sales_column:

        raise HTTPException(

            status_code=status.HTTP_400_BAD_REQUEST,

            detail=f"""
Missing required columns.

Found columns:
{list(df.columns)}

Need:
- Date column
- Sales OR Revenue column

OR

- Units_Sold + Price columns
"""
        )

    # ============================
    # PROCESS DATA
    # ============================

    try:

        # ============================
        # APPLY CATEGORY FILTER
        # ============================

        if (

            category
            and category_column
            and category.strip() != ""
        ):

            df = df[

                df[category_column]
                .astype(str)
                .str.lower()

                == category.lower()
            ]

        # ============================
        # APPLY PRODUCT FILTER
        # ============================

        if (

            product
            and product_column
            and product.strip() != ""
        ):

            df = df[

                df[product_column]
                .astype(str)
                .str.lower()

                == product.lower()
            ]

        # ============================
        # EMPTY CHECK
        # ============================

        if df.empty:

            raise HTTPException(

                status_code=404,

                detail="No matching data found"
            )

        # ============================
        # DATE CONVERSION
        # ============================

        df[date_column] = pd.to_datetime(
            df[date_column],
            errors="coerce"
        )

        # ============================
        # SALES CONVERSION
        # ============================

        df[sales_column] = pd.to_numeric(
            df[sales_column],
            errors="coerce"
        )

        # ============================
        # REMOVE NULLS
        # ============================

        df = df.dropna(
            subset=[date_column, sales_column]
        )

        # ============================
        # CREATE MONTH COLUMN
        # ============================

        df["month"] = df[
            date_column
        ].dt.to_period("M")

        # ============================
        # MONTHLY AGGREGATION
        # ============================

        monthly_data = (

            df.groupby("month")[sales_column]
            .sum()
            .reset_index()
        )

        # ============================
        # VALIDATE DATA SIZE
        # ============================

        if len(monthly_data) < 2:

            raise HTTPException(

                status_code=400,

                detail="Not enough historical data"
            )

    except HTTPException as e:

        raise e

    except Exception as e:

        raise HTTPException(

            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,

            detail=f"Error processing dataset: {str(e)}"
        )

    # ============================
    # PREPARE DATA FOR PROPHET
    # ============================

    prophet_df = monthly_data.rename(

        columns={

            "month": "ds",

            sales_column: "y"
        }
    )

    # ============================
    # CONVERT DATE
    # ============================

    prophet_df["ds"] = prophet_df["ds"].astype(str)

    prophet_df["ds"] = pd.to_datetime(
        prophet_df["ds"]
    )

    # ============================
    # TRAIN MODEL
    # ============================

    model = Prophet(

        yearly_seasonality=True,

        weekly_seasonality=False,

        daily_seasonality=False
    )

    model.fit(prophet_df)

    # ============================
    # FUTURE DATAFRAME
    # ============================

    future = model.make_future_dataframe(

        periods=future_months,

        freq="MS"
    )

    # ============================
    # PREDICT
    # ============================

    forecast = model.predict(
        future
    )

    # ============================
    # FUTURE FORECAST
    # ============================

    last_training_date = prophet_df["ds"].max()

    future_forecast = forecast[
        forecast["ds"] > last_training_date
    ].head(future_months)

    # ============================
    # BUILD RESPONSE
    # ============================

    forecast_results = []

    for _, row in future_forecast.iterrows():

        revenue = round(
            float(row["yhat"]),
            2
        )

        if revenue < 0:
            revenue = 0

        forecast_results.append({

            "month": row["ds"].strftime("%Y-%m"),

            "predicted_revenue": revenue
        })

    # ============================
    # CALCULATE ERROR
    # ============================

    try:

        training_forecast = model.predict(
            prophet_df
        )

        mape = mean_absolute_percentage_error(

            prophet_df["y"],

            training_forecast["yhat"]
        )

        forecast_error = round(
            mape * 100,
            2
        )

    except:

        forecast_error = 0

    # ============================
    # RETURN RESPONSE
    # ============================

    return {

        "model": "Prophet Forecasting",

        "category_filter": category,

        "product_filter": product,

        "forecast_error_mape": forecast_error,

        "forecast_months": future_months,

        "forecast": forecast_results
    }