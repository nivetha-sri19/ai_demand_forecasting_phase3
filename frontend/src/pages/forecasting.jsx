import React, { useState } from "react";
import axios from "axios";

const Forecasting = () => {
  const [category, setCategory] = useState("Frozen Foods");
  const [product, setProduct] = useState("Ice Cream");
  const [months, setMonths] = useState(6);

  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // GENERATE FORECAST
  // =========================
  const generateForecast = async () => {
    try {
      setLoading(true);

      // GET TOKEN
      const token = localStorage.getItem("token");

      if (!token) {
        alert("User not logged in");
        setLoading(false);
        return;
      }

      console.log("Calling Forecast API...");

      const response = await axios.get(
        "http://localhost:8000/forecast/predict",
        {
          params: {
            future_months: months,
            category: category,
            product: product,
          },

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("FULL RESPONSE:", response.data);

      // =========================
      // HANDLE RESPONSE
      // =========================

      if (response.data.forecast) {
        setForecastData(response.data.forecast);
      }

      else if (response.data.predictions) {
        setForecastData(response.data.predictions);
      }

      else if (Array.isArray(response.data)) {
        setForecastData(response.data);
      }

      else {
        console.log("Unexpected Response:", response.data);

        alert("Forecast response format not recognized");
      }

    } catch (error) {

      console.log("FULL ERROR:", error);

      if (error.response) {
        alert(
          JSON.stringify(error.response.data)
        );
      }

      else if (error.request) {
        alert("Backend server not reachable");
      }

      else {
        alert(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Advanced AI Forecasting
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Advanced Prophet-based business demand forecasting system
      </p>

      {/* FILTER SECTION */}
      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "16px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Forecast Filters
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* CATEGORY */}
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              width: "220px",
              background: "#0f172a",
              color: "white",
            }}
          />

          {/* PRODUCT */}
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Enter Product"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              width: "220px",
              background: "#0f172a",
              color: "white",
            }}
          />

          {/* MONTHS */}
          <select
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              width: "180px",
              background: "#0f172a",
              color: "white",
            }}
          >
            <option value={3}>3 Months</option>
            <option value={6}>6 Months</option>
            <option value={9}>9 Months</option>
            <option value={12}>12 Months</option>
          </select>

          {/* BUTTON */}
          <button
            onClick={generateForecast}
            disabled={loading}
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              minWidth: "220px",
            }}
          >
            {loading ? "Loading..." : "Generate Forecast"}
          </button>
        </div>
      </div>

      {/* RESULTS */}
      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "16px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Forecast Results
        </h2>

        {Array.isArray(forecastData) &&
        forecastData.length > 0 ? (

          <div>
            {forecastData.map((item, index) => (

              <div
                key={index}
                style={{
                  background: "#0f172a",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  Month {index + 1}
                </span>

                <span
                  style={{
                    color: "#22c55e",
                    fontWeight: "bold",
                  }}
                >
                  {typeof item === "object"
                    ? item.yhat ||
                      item.value ||
                      JSON.stringify(item)
                    : item}
                </span>

              </div>

            ))}
          </div>

        ) : (

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            No forecast generated yet
          </p>

        )}
      </div>
    </div>
  );
};

export default Forecasting;