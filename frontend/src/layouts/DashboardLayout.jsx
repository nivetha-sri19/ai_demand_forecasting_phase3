import Sidebar from "../components/common/Sidebar";

import Navbar from "../components/common/Navbar";

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 md:ml-64">
        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;