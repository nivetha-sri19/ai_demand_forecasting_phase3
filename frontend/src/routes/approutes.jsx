import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import AdminLayout from "../layouts/AdminLayout";

import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";

import Forecasting from "../pages/Forecasting";

import Reports from "../pages/Reports";

import Notifications from "../pages/Notifications";

import AdminDashboard from "../pages/AdminDashboard";

import Datasets from "../pages/Datasets";

import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const token =
    localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        {/* Dashboard Layout */}
        <Route
          element={<DashboardLayout />}
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/forecasting"
            element={<Forecasting />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/datasets"
            element={<Datasets />}
          />
        </Route>

        {/* Admin Layout */}
        <Route
          element={<AdminLayout />}
        >
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />
        </Route>

        {/* Not Found */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;