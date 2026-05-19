const UserManagement = () => {
  const users = [
    {
      name: "Admin",
      email: "admin@gmail.com",
      role: "Administrator",
    },
    {
      name: "Analyst",
      email: "analyst@gmail.com",
      role: "Forecast Analyst",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          User Management
        </h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Add User
        </button>
      </div>

      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">
                {user.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {user.email}
              </p>

              <p className="text-blue-500 text-sm mt-1">
                {user.role}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;