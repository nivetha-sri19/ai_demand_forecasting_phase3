const ForecastDetails = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-5">
        Forecast Details
      </h1>

      <div className="space-y-4">

        <p>
          Product: Laptop
        </p>

        <p>
          Forecast Quantity: 450
        </p>

        <p>
          AI Model: LSTM
        </p>

        <p>
          Prediction Accuracy: 96%
        </p>

        <p>
          Forecast Date: 2026-05-28
        </p>

      </div>

    </div>
  );
};

export default ForecastDetails;