from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import pandas as pd

from app.database import get_db
from app.models.dataset import Dataset
from app.models.user import User
from app.auth.oauth2 import get_current_user


router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


# =========================================
# SALES REPORT API
# =========================================

@router.get("/sales-report")
def sales_report(

    db: Session = Depends(get_db),

    current_user: User = Depends(get_current_user)

):

    # =========================================
    # GET DATASET
    # =========================================

    dataset = db.query(Dataset).filter(

        Dataset.uploaded_by == current_user.id

    ).order_by(

        Dataset.created_at.desc()

    ).first()

    if not dataset:

        raise HTTPException(

            status_code=404,

            detail="No dataset found"
        )

    # =========================================
    # READ DATASET
    # =========================================

    try:

        if dataset.file_path.endswith(".csv"):

            df = pd.read_csv(dataset.file_path)

        else:

            df = pd.read_excel(dataset.file_path)

    except Exception as e:

        raise HTTPException(

            status_code=500,

            detail=f"Error reading dataset: {str(e)}"
        )

    # =========================================
    # REQUIRED COLUMNS
    # =========================================

    required_columns = [

        "Date",

        "Product_Name",

        "Category",

        "Units_Sold",

        "Price"
    ]

    for col in required_columns:

        if col not in df.columns:

            raise HTTPException(

                status_code=400,

                detail=f"Missing column: {col}"
            )

    # =========================================
    # PROCESS DATA
    # =========================================

    try:

        # TOTAL SALES VALUE

        df["Total_Sales"] = (

            df["Units_Sold"] * df["Price"]
        )

        # CATEGORY WISE SALES

        category_sales = (

            df.groupby("Category")["Total_Sales"]
            .sum()
            .reset_index()
        )

        # PRODUCT WISE SALES

        product_sales = (

            df.groupby("Product_Name")["Total_Sales"]
            .sum()
            .reset_index()
        )

    except Exception as e:

        raise HTTPException(

            status_code=500,

            detail=f"Error processing dataset: {str(e)}"
        )

    # =========================================
    # FORMAT RESPONSE
    # =========================================

    category_result = []

    for _, row in category_sales.iterrows():

        category_result.append({

            "category": row["Category"],

            "total_sales": round(
                float(row["Total_Sales"]),
                2
            )
        })

    product_result = []

    for _, row in product_sales.iterrows():

        product_result.append({

            "product": row["Product_Name"],

            "total_sales": round(
                float(row["Total_Sales"]),
                2
            )
        })

    # =========================================
    # RETURN RESPONSE
    # =========================================

    return {

        "total_records": len(df),

        "category_wise_sales": category_result,

        "product_wise_sales": product_result
    }