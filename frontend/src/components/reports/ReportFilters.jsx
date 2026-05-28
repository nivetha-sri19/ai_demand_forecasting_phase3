const ReportFilters = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex gap-4 flex-wrap">

      <select className="border p-3 rounded-lg">

        <option>All Reports</option>

        <option>Sales</option>

        <option>Forecast</option>

        <option>Revenue</option>

      </select>

      <select className="border p-3 rounded-lg">

        <option>Today</option>

        <option>This Week</option>

        <option>This Month</option>

      </select>

      <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">

        Apply

      </button>

    </div>
  );
};

export default ReportFilters;