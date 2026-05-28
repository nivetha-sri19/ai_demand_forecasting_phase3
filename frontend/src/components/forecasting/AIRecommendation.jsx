const recommendations = [
  'Increase stock for laptops by 15%',
  'Reduce inventory for tablets',
  'Demand spike expected next month',
  'AI suggests boosting mobile production'
];

const AIRecommendation = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        AI Recommendations
      </h2>

      <div className="space-y-4">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded"
          >

            {item}

          </div>

        ))}

      </div>

    </div>
  );
};

export default AIRecommendation;