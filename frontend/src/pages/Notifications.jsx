import { useNotification } from "../context/NotificationContext";

const Notifications = () => {
  const { notifications } =
    useNotification();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Notifications
      </h1>

      <div className="space-y-4">
        {notifications.map(
          (item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md"
            >
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  {item.title}
                </h2>

                <span className="text-sm text-gray-400">
                  {item.time}
                </span>
              </div>

              <p className="text-gray-500 mt-2">
                {item.message}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Notifications;