import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Advanced AI Forecasting
        </h1>

        <p className="text-sm text-gray-500">
          Demand Forecast Analytics Platform
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-xl py-2 pl-10 pr-4 outline-none"
          />

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>

        <button className="relative">
          <Bell className="text-gray-700" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </div>
  );
};

export default Navbar;