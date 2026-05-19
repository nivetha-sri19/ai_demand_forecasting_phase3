import pandas as pd

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status
)

from sqlalchemy.orm import Session

from app.database import get_db

from app.models.dataset import Dataset
from app.models.user import User
from app.models.forecast_history import ForecastHistory

from app.auth.oauth2 import get_current_user

from app.services.forecasting.prophet_service import (
    run_prophet_forecast
)

from app.services.forecasting.linear_regression_service import (
    run_linear_regression_forecast
)

from app.services.notification_service import (
    create_notification
)


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

    model: str = "prophet",

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

        # DEBUG PRINT
        print("\n========== DATASET COLUMNS ==========")
        print(df.columns.tolist())
        print("=====================================\n")

    except Exception as e:

        raise HTTPException(

            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,

            detail=f"Error reading dataset: {str(e)}"
        )

    # ============================
    # DETECT REQUIRED COLUMNS
    # ============================

    date_column = None
    sales_column = None

    category_column = None
    product_column = None

    for col in df.columns:

        col_name = str(col).lower().strip()

        # DATE COLUMN
        if (
            "date" in col_name
            or "time" in col_name
            or "month" in col_name
            or "year" in col_name
        ):

            date_column = col

        # SALES COLUMN
        if (
            "sales" in col_name
            or "revenue" in col_name
            or "amount" in col_name
            or "income" in col_name
            or "profit" in col_name
            or "price" in col_name
            or "demand" in col_name
            or "quantity" in col_name
        ):

            sales_column = col

        # CATEGORY COLUMN
        if (
            "category" in col_name
            or "type" in col_name
        ):

            category_column = col

        # PRODUCT COLUMN
        if (
            "product" in col_name
            or "item" in col_name
            or "name" in col_name
        ):

            product_column = col

    # ============================
    # DEBUGGING OUTPUT
    # ============================

    print("Date Column:", date_column)
    print("Sales Column:", sales_column)
    print("Category Column:", category_column)
    print("Product Column:", product_column)

    # ============================
    # VALIDATE REQUIRED COLUMNS
    # ============================

    if not date_column or not sales_column:

        raise HTTPException(

            status_code=status.HTTP_400_BAD_REQUEST,

            detail="Required columns not found"
        )

    # ============================
    # FILTER DEBUGGING
    # ============================

    print("\n========== FILTER DEBUG ==========")

    if category_column:

        print("\nAvailable Categories:")

        print(
            df[category_column]
            .astype(str)
            .str.strip()
            .unique()
        )

    if product_column:

        print("\nAvailable Products:")

        print(
            df[product_column]
            .astype(str)
            .str.strip()
            .unique()
        )

    print("\nReceived Category:", category)
    print("Received Product:", product)

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
            .str.strip()
            .str.lower()

            == category.strip().lower()
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
            .str.strip()
            .str.lower()

            == product.strip().lower()
        ]

    print("\nFiltered Rows:", len(df))

    print("===================================\n")

    # ============================
    # VALIDATE FILTERED DATA
    # ============================

    if df.empty:

        raise HTTPException(

            status_code=404,

            detail="No matching data found"
        )

    # ============================
    # PROCESS DATA
    # ============================

    try:

        df[date_column] = pd.to_datetime(
            df[date_column]
        )

        df["month"] = df[
            date_column
        ].dt.to_period("M")

        monthly_data = (

            df.groupby("month")[sales_column]
            .sum()
            .reset_index()
        )

        print("\n========== MONTHLY DATA ==========")
        print(monthly_data.head())
        print("==================================\n")

        if len(monthly_data) < 6:

            raise HTTPException(

                status_code=400,

                detail="Minimum 6 months of historical data required"
            )

    except Exception as e:

        raise HTTPException(

            status_code=500,

            detail=f"Error processing dataset: {str(e)}"
        )

    # ============================
    # PREPARE DATA FOR FORECASTING
    # ============================

    prophet_df = monthly_data.rename(

        columns={

            "month": "ds",

            sales_column: "y"
        }
    )

    prophet_df["ds"] = prophet_df["ds"].astype(str)

    prophet_df["ds"] = pd.to_datetime(
        prophet_df["ds"]
    )

    print("\n========== FORECAST DATA ==========")
    print(prophet_df.head())
    print("===================================\n")

    # ============================
    # RUN FORECAST MODEL
    # ============================

    if model.lower() == "prophet":

        forecast_response = run_prophet_forecast(

            prophet_df=prophet_df,

            future_months=future_months
        )

    elif model.lower() == "linear":

        forecast_response = run_linear_regression_forecast(

            prophet_df=prophet_df,

            future_months=future_months
        )

    else:

        raise HTTPException(

            status_code=400,

            detail="Invalid forecasting model"
        )

    # ============================
    # SAVE FORECAST HISTORY
    # ============================

    history = ForecastHistory(

        user_id=current_user.id,

        model_used=forecast_response[
            "model"
        ],

        category=category,

        product=product,

        forecast_months=future_months,

        mape=forecast_response[
            "forecast_error_mape"
        ],

        mae=forecast_response[
            "mae"
        ],

        rmse=forecast_response[
            "rmse"
        ]
    )

    db.add(history)

    db.commit()

    # ============================
    # CREATE NOTIFICATION
    # ============================

    create_notification(

        db=db,

        user_id=current_user.id,

        title="Forecast Generated",

        message=f"{forecast_response['model']} forecast completed successfully."
    )

    # ============================
    # FORMAT FORECAST RESPONSE
    # ============================

    formatted_forecast = []

    for item in forecast_response["forecast"]:

        formatted_forecast.append({

            "month": item["month"],

            "predicted_revenue": int(
                item["predicted_revenue"]
            )
        })

    # ============================
    # RETURN RESPONSE
    # ============================

    return {

        "model": forecast_response[
            "model"
        ],

        "forecast_error_mape": round(

            forecast_response[
                "forecast_error_mape"
            ],

            2
        ),

        "mae": round(

            forecast_response[
                "mae"
            ],

            2
        ),

        "rmse": round(

            forecast_response[
                "rmse"
            ],

            2
        ),

        "forecast_months": future_months,

        "category_filter": category,

        "product_filter": product,

        "forecast": formatted_forecast
    }