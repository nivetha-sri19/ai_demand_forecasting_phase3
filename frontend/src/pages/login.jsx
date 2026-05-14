import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("username", form.username);
      formData.append("password", form.password);

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      navigate("/dashboard");

    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4">

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white/10 border border-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          AI Forecast
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Advanced Demand Prediction System
        </p>

        <input
          type="text"
          name="username"
          placeholder="Enter Email"
          value={form.username}
          onChange={handleChange}
          className="w-full p-4 mb-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-4 mb-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 shadow-lg"
        >
          Login
        </button>

        <p className="text-center text-gray-300 mt-6">
          Don’t have an account?

          <Link
            to="/register"
            className="text-cyan-300 ml-2 hover:text-white"
          >
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;