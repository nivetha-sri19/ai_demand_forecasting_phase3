const ForecastFilters = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-wrap gap-4">

      <select className="border p-3 rounded-lg">

        <option>Today</option>

        <option>This Week</option>

        <option>This Month</option>

      </select>

      <select className="border p-3 rounded-lg">

        <option>All Products</option>

        <option>Laptop</option>

        <option>Mobile</option>

        <option>Accessories</option>

      </select>

      <select className="border p-3 rounded-lg">

        <option>All Models</option>

        <option>LSTM</option>

        <option>ARIMA</option>

        <option>XGBoost</option>

      </select>

      <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

        Apply Filters

      </button>

    </div>
  );
};

export default ForecastFilters;