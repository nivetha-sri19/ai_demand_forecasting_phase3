import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Bell,
  Database,
  Shield,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Forecasting",
      icon: BarChart3,
      path: "/forecasting",
    },
    {
      title: "Reports",
      icon: FileText,
      path: "/reports",
    },
    {
      title: "Datasets",
      icon: Database,
      path: "/datasets",
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/notifications",
    },
    {
      title: "Admin",
      icon: Shield,
      path: "/admin",
    },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed hidden md:block">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">
          Forecast AI
        </h1>
      </div>

      <div className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-5 left-0 w-full px-4">
        <button className="flex items-center gap-3 bg-red-500 hover:bg-red-600 w-full p-3 rounded-xl">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;