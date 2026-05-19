const AnalyticsCards = () => {
  const cards = [
    {
      title: "Total Forecasts",
      value: "1,245",
      growth: "+12%",
    },
    {
      title: "Prediction Accuracy",
      value: "95%",
      growth: "+4%",
    },
    {
      title: "Datasets Uploaded",
      value: "320",
      growth: "+18%",
    },
    {
      title: "Reports Generated",
      value: "560",
      growth: "+10%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <p className="text-gray-500 text-sm">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {card.value}
          </h2>

          <span className="text-green-500 text-sm mt-2 block">
            {card.growth} this month
          </span>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;