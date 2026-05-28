const notifications = [
  'Forecast generated successfully',
  'Dataset uploaded',
  'Monthly report exported',
  'New AI model trained'
];

const Notifications = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-5">
        Notifications
      </h1>

      <div className="space-y-4">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="border-b pb-3"
          >

            {item}

          </div>

        ))}

      </div>

    </div>
  );
};

export default Notifications;