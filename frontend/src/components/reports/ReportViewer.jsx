const ReportViewer = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          Forecast Report
        </h2>

        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl text-sm">
          Generated Successfully
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <h3 className="font-semibold">
            Product
          </h3>

          <p className="text-gray-500">
            Ice Cream
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Category
          </h3>

          <p className="text-gray-500">
            Frozen Foods
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Forecast Result
          </h3>

          <p className="text-gray-500">
            Expected Demand: 15,000 Units
          </p>
        </div>

        <div>
          <h3 className="font-semibold">
            Accuracy
          </h3>

          <p className="text-green-500 font-semibold">
            95%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;