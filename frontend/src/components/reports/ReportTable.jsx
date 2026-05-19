const ReportTable = () => {
  const reports = [
    {
      product: "Ice Cream",
      category: "Frozen Foods",
      prediction: 1200,
      accuracy: "95%",
    },
    {
      product: "Pizza",
      category: "Frozen Foods",
      prediction: 900,
      accuracy: "92%",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">
              Product
            </th>

            <th className="text-left p-4">
              Category
            </th>

            <th className="text-left p-4">
              Prediction
            </th>

            <th className="text-left p-4">
              Accuracy
            </th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report, index) => (
            <tr
              key={index}
              className="border-b"
            >
              <td className="p-4">
                {report.product}
              </td>

              <td className="p-4">
                {report.category}
              </td>

              <td className="p-4">
                {report.prediction}
              </td>

              <td className="p-4 text-green-500 font-semibold">
                {report.accuracy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;