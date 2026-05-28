const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 gap-5">

      <div className="bg-green-500 text-white p-5 rounded-xl">
        <h2 className="text-xl font-bold">
          98%
        </h2>

        <p>System Uptime</p>
      </div>

      <div className="bg-blue-500 text-white p-5 rounded-xl">
        <h2 className="text-xl font-bold">
          12K
        </h2>

        <p>Forecast Requests</p>
      </div>

    </div>
  );
};

export default QuickStats;