const SystemAnalytics = () => {
  const analytics = [
    {
      title: "Active Users",
      value: "120",
    },
    {
      title: "Forecast Requests",
      value: "4.5K",
    },
    {
      title: "Reports Generated",
      value: "1.2K",
    },
    {
      title: "Datasets Uploaded",
      value: "650",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {analytics.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h3 className="text-gray-500">
            {item.title}
          </h3>

          <h2 className="text-3xl font-bold mt-3">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SystemAnalytics;