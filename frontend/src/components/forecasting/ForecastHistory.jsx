const ForecastHistory = () => {
  const history = [
    {
      product: "Ice Cream",
      model: "LSTM",
      prediction: 1500,
      date: "2026-05-18",
    },
    {
      product: "Frozen Pizza",
      model: "ARIMA",
      prediction: 900,
      date: "2026-05-17",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Forecast History
        </h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {history.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">
                {item.product}
              </h3>

              <span className="text-sm text-gray-400">
                {item.date}
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <p className="text-gray-600">
                Model:
                {" "}
                <span className="font-medium">
                  {item.model}
                </span>
              </p>

              <p className="text-gray-600">
                Prediction:
                {" "}
                <span className="font-medium">
                  {item.prediction}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastHistory;