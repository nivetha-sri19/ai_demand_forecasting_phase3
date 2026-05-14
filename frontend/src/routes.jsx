import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadDataset from "./pages/UploadDataset";
import Forecast from "./pages/Forecast";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadDataset />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/reports" element={<Reports />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesConfig;