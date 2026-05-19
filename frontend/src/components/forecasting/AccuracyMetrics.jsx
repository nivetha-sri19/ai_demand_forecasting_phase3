const AccuracyMetrics = () => {
  const metrics = [
    {
      model: "ARIMA",
      accuracy: "89%",
    },
    {
      model: "LSTM",
      accuracy: "95%",
    },
    {
      model: "XGBoost",
      accuracy: "92%",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Accuracy Metrics
      </h2>

      <div className="space-y-5">
        {metrics.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">
                {item.model}
              </span>

              <span className="font-semibold">
                {item.accuracy}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: item.accuracy,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccuracyMetrics;