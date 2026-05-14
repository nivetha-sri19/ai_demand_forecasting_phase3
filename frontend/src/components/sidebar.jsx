import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Upload Dataset",
      path: "/upload",
      icon: <FaUpload />,
    },
    {
      name: "Forecast",
      path: "/forecast",
      icon: <FaChartLine />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        AI Forecasting
      </h1>

      <div className="space-y-3">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            to={menu.path}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
              location.pathname === menu.path
                ? "bg-blue-600"
                : "hover:bg-slate-700"
            }`}
          >
            {menu.icon}
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;