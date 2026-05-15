AI Demand Forecasting System
Project Overview

The AI Demand Forecasting System is a full-stack web application that predicts future product demand and revenue using Machine Learning and Facebook Prophet forecasting.

The system allows users to:

Upload sales datasets

Filter by category and product

Generate future revenue forecasts

Visualize forecasting graphs

Download analytical reports

View prediction metrics through an interactive dashboard

Tech Stack


Frontend


React.js

Vite

Tailwind CSS

Axios

Recharts

Framer Motion

Lucide React Icons


Backend


FastAPI

SQLAlchemy

MySQL

JWT Authentication

Pandas

Prophet Forecasting

Scikit-learn


Features


Authentication

User Registration

Secure Login

JWT Token Authentication

Protected Routes

Dataset Upload

Upload CSV or Excel datasets

Automatic column detection

Dataset validation

Forecasting

AI-based future demand prediction

Prophet forecasting model

Category-wise filtering

Product-wise filtering

Forecast error calculation

Dashboard

Revenue prediction cards

Forecast analytics

Interactive line graph

Prediction status tracking

Reports

Download forecast reports

Revenue analysis

Monthly prediction summary


Project Structure

advanced_AI_Forecasting/
│

├── backend/

│   ├── app/

│   │   ├── auth/

│   │   ├── models/

│   │   ├── routers/

│   │   ├── schemas/

│   │   ├── services/

│   │   ├── database.py

│   │   ├── config.py

│   │   └── main.py

│   │

│   ├── uploads/

│   ├── requirements.txt

│   └── .env

│

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── api/

│   │   ├── routes/

│   │   ├── App.jsx

│   │   ├── main.jsx

│   │   └── index.css

│   │

│   ├── package.json

│   └── vite.config.js

│

└── README.md


Backend runs on:


http://127.0.0.1:8000

Swagger API:

http://127.0.0.1:8000/docs


Frontend runs on:

http://localhost:5174


Required Dataset Format

Your dataset must contain:

Column	Description

Date	Sales date

Product_Name	Product name

Category	Product category

Units_Sold	Quantity sold

Price	Product price

Sample Dataset Columns

Date

Product_ID

Product_Name

Category

Units_Sold

Price

Discount

Store

Region

Forecast Logic

The backend automatically:

Detects date column

Detects sales/revenue column

If revenue is missing:

Revenue = Units_Sold × Price

Aggregates monthly sales

Trains Prophet model

Predicts future revenue

Returns forecast data to frontend

API Endpoints

Authentication

Register

POST /auth/register

Login

POST /auth/login

Dataset

Upload Dataset

POST /dataset/upload

Forecast

Predict Future Revenue

GET /forecast/predict


UI Modules

Login Page

Register Page

Dashboard

Upload Dataset

Forecast Page

Reports Page


Machine Learning Workflow


Dataset Upload

       ↓

Data Cleaning

       ↓

Revenue Calculation

       ↓

Monthly Aggregation
 
       ↓

Prophet Training
    
       ↓

Future Prediction

       ↓

Dashboard Visualization


Libraries Used


Backend


fastapi

uvicorn

sqlalchemy

pandas

numpy

prophet

scikit-learn

python-jose

passlib

pymysql

openpyxl

python-multipart


Frontend


react

react-router-dom

axios

recharts

framer-motion

lucide-react

tailwindcss

Future Enhancements

AI Chatbot Assistant

Multi-product forecasting

Real-time analytics

Advanced ML models

Export to PDF/Excel

Email notifications

Cloud deployment

For login username: nivetha@gmail.com password:Nivetha123
