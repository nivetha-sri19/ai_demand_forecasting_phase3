import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-slate-800">
        AI Demand Forecasting
      </h1>

      <div className="flex items-center gap-5">
        <FaBell className="text-xl cursor-pointer" />
        <FaUserCircle className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;