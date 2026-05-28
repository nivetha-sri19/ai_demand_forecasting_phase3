const logs = [
  {
    id: 1,
    action: 'Deleted Report',
    user: 'Admin',
    date: '2026-05-28'
  },
  {
    id: 2,
    action: 'Updated Forecast',
    user: 'Manager',
    date: '2026-05-27'
  }
];

const AuditLogs = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Audit Logs
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3">Action</th>

            <th>User</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {logs.map((log) => (

            <tr
              key={log.id}
              className="border-b"
            >

              <td className="py-3">
                {log.action}
              </td>

              <td>
                {log.user}
              </td>

              <td>
                {log.date}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AuditLogs;