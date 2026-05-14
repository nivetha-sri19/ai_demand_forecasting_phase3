from fastapi import FastAPI
from app.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware
# Import routers
from app.routers.auth_router import router as auth_router
from app.routers.user_router import router as user_router
from app.routers.dataset_router import router as dataset_router
from app.routers.forecast_router import router as forecast_router
from app.routers.analytics_router import router as analytics_router
from app.routers.report_router import router as report_router

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="Advanced AI Forecasting API",
    description="AI-powered demand forecasting backend using FastAPI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def home():
    return {
        "message": "Advanced AI Forecasting API is running successfully"
    }

# Include routers
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(dataset_router)
app.include_router(forecast_router)
app.include_router(analytics_router)
app.include_router(report_router)