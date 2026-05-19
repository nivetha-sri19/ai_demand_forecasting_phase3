const RecentActivities = () => {
  const activities = [
    {
      title: "Forecast Generated",
      description:
        "Ice Cream demand prediction completed",
      time: "2 mins ago",
    },
    {
      title: "Dataset Uploaded",
      description:
        "Frozen Foods dataset uploaded",
      time: "10 mins ago",
    },
    {
      title: "Report Exported",
      description:
        "PDF analytics report downloaded",
      time: "30 mins ago",
    },
    {
      title: "Model Comparison",
      description:
        "LSTM vs ARIMA comparison completed",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">
        Recent Activities
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-b pb-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <span className="text-sm text-gray-400">
                {activity.time}
              </span>
            </div>

            <p className="text-gray-500 mt-2 text-sm">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;