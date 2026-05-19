const NotificationDropdown = ({
  notifications,
}) => {
  return (
    <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-xl z-50 overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">
          Notifications
        </h2>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((item, index) => (
            <div
              key={index}
              className="p-4 border-b hover:bg-gray-50"
            >
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.message}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                {item.time}
              </p>
            </div>
          ))
        ) : (
          <div className="p-5 text-center text-gray-500">
            No Notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;