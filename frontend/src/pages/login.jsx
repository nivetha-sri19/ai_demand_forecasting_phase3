import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // HANDLE LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      // FORM DATA FOR FASTAPI OAuth2
      const formData = new URLSearchParams();

      formData.append("username", email);
      formData.append("password", password);

      console.log("Sending Login Request...");

      const response = await axios.post(
        "http://localhost:8000/auth/login",
        formData,
        {
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      // STORE TOKEN
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      // OPTIONAL USER DATA
      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      alert("Login Successful");

      // NAVIGATE
      navigate("/forecasting");

    } catch (error) {

      console.log("LOGIN ERROR:", error);

      // BACKEND ERROR
      if (error.response) {

        console.log(
          "BACKEND RESPONSE:",
          error.response.data
        );

        setError(
          error.response?.data?.detail ||
          error.response?.data?.message ||
          JSON.stringify(error.response?.data) ||
          "Login failed"
        );
      }

      // SERVER ERROR
      else if (error.request) {
        setError("Backend server not reachable");
      }

      // OTHER ERROR
      else {
        setError(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#1e293b",
          padding: "35px",
          borderRadius: "16px",
          color: "white",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Forecast AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Login to continue
        </p>

        {/* ERROR */}
        {error && (
          <div
            style={{
              background: "#7f1d1d",
              color: "#fecaca",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            {String(error)}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
              }}
            >
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter email"
              required
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                background: "#0f172a",
                color: "white",
              }}
            />
          </div>

          {/* PASSWORD */}
          <div
            style={{
              marginBottom: "25px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
              }}
            >
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
              required
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                background: "#0f172a",
                color: "white",
              }}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;