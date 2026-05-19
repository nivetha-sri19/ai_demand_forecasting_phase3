const ForecastSummary = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-5">
        Forecast Summary
      </h2>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span className="text-gray-500">
            Highest Demand Product
          </span>

          <span className="font-semibold">
            Ice Cream
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Predicted Sales
          </span>

          <span className="font-semibold">
            15,000 Units
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Best Performing Model
          </span>

          <span className="font-semibold">
            LSTM
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Prediction Accuracy
          </span>

          <span className="font-semibold">
            95%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForecastSummary;