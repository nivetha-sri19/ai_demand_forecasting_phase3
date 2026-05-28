import {
  Routes,
  Route
} from 'react-router-dom';

import DashboardLayout from '../layouts/DashboardLayout';
import AdminLayout from '../layouts/AdminLayout';
import AuthLayout from '../layouts/AuthLayout';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';

import Dashboard from '../pages/Dashboard/Dashboard';

import Forecasting from '../pages/Forecasting/Forecasting';
import RealTimeForecasting from '../pages/Forecasting/RealTimeForecasting';
import ForecastDetails from '../pages/Forecasting/ForecastDetails';

import Reports from '../pages/Reports/Reports';
import ReportDetails from '../pages/Reports/ReportDetails';

import Datasets from '../pages/Datasets/Datasets';
import DatasetDetails from '../pages/Datasets/DatasetDetails';

import Notifications from '../pages/Notifications/Notifications';

import AdminDashboard from '../pages/Admin/AdminDashboard';
import Users from '../pages/Admin/Users';
import Settings from '../pages/Admin/Settings';
import Logs from '../pages/Admin/Logs';

import AppSettings from '../pages/Settings/Settings';

import NotFound from '../pages/NotFound/NotFound';

import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

const AppRoutes = () => {
  return (
    <Routes>

      {/* Auth */}

      <Route element={<AuthLayout />}>

        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

      </Route>

      {/* Dashboard */}

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
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
          path="/realtime"
          element={<RealTimeForecasting />}
        />

        <Route
          path="/forecast/:id"
          element={<ForecastDetails />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/report/:id"
          element={<ReportDetails />}
        />

        <Route
          path="/datasets"
          element={<Datasets />}
        />

        <Route
          path="/dataset/:id"
          element={<DatasetDetails />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/settings"
          element={<AppSettings />}
        />

      </Route>

      {/* Admin */}

      <Route
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/users"
          element={<Users />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

        <Route
          path="/admin/logs"
          element={<Logs />}
        />

      </Route>

      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;