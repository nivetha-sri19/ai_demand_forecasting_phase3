const LivePredictionCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-3">
        Live Prediction
      </h2>

      <p className="text-lg">
        AI predicts a 24% increase in demand
        during the upcoming weekend sale.
      </p>

      <div className="mt-5">

        <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
          Accuracy: 96%
        </span>

      </div>

    </div>
  );
};

export default LivePredictionCard;