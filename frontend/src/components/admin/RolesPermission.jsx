const roles = [
  {
    role: 'Admin',
    permission: 'Full Access'
  },
  {
    role: 'Manager',
    permission: 'Manage Reports'
  },
  {
    role: 'Analyst',
    permission: 'View Analytics'
  }
];

const RolesPermissions = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Roles & Permissions
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3">Role</th>

            <th>Permission</th>

          </tr>

        </thead>

        <tbody>

          {roles.map((item, index) => (

            <tr
              key={index}
              className="border-b"
            >

              <td className="py-3">
                {item.role}
              </td>

              <td>
                {item.permission}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default RolesPermissions;