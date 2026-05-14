from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import pandas as pd

from app.database import get_db
from app.models.dataset import Dataset
from app.models.user import User
from app.auth.oauth2 import get_current_user


router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


# =========================================
# DATASET SUMMARY API
# =========================================

@router.get("/summary")
def dataset_summary(

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
    # READ FILE
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
    # SUMMARY
    # =========================================

    return {

        "total_rows": len(df),

        "total_columns": len(df.columns),

        "columns": list(df.columns),

        "missing_values": df.isnull().sum().to_dict()
    }


# =========================================
# MONTHLY SALES ANALYTICS API
# =========================================

@router.get("/monthly-sales")
def monthly_sales(

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
    # READ FILE
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

        "Units_Sold"
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

        df["Date"] = pd.to_datetime(df["Date"])

        df["Month"] = df["Date"].dt.strftime("%Y-%m")

        monthly_sales_data = (

            df.groupby("Month")["Units_Sold"]
            .sum()
            .reset_index()
        )

    except Exception as e:

        raise HTTPException(

            status_code=500,

            detail=f"Error processing dataset: {str(e)}"
        )

    # =========================================
    # RESPONSE
    # =========================================

    result = []

    for _, row in monthly_sales_data.iterrows():

        result.append({

            "month": row["Month"],

            "total_units_sold": int(row["Units_Sold"])
        })

    return {

        "monthly_sales": result
    }