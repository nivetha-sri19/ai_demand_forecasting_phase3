const ActivityMonitor = () => {
  const logs = [
    {
      user: "Admin",
      action: "Generated Forecast",
      time: "2 mins ago",
    },
    {
      user: "Analyst",
      action: "Uploaded Dataset",
      time: "15 mins ago",
    },
    {
      user: "Manager",
      action: "Exported Report",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-6">
        Activity Monitor
      </h2>

      <div className="space-y-4">
        {logs.map((log, index) => (
          <div
            key={index}
            className="border-b pb-4"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">
                {log.user}
              </h3>

              <span className="text-sm text-gray-400">
                {log.time}
              </span>
            </div>

            <p className="text-gray-500 mt-2">
              {log.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityMonitor;