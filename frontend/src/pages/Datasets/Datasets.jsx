const datasets = [
  {
    id: 1,
    name: 'Sales_Data.csv',
    records: 1200
  },
  {
    id: 2,
    name: 'Forecast_Data.xlsx',
    records: 850
  }
];

const Datasets = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-5">
        Datasets
      </h1>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3">
              ID
            </th>

            <th>
              Dataset Name
            </th>

            <th>
              Records
            </th>

          </tr>

        </thead>

        <tbody>

          {datasets.map((dataset) => (

            <tr
              key={dataset.id}
              className="border-b"
            >

              <td className="py-3">
                {dataset.id}
              </td>

              <td>
                {dataset.name}
              </td>

              <td>
                {dataset.records}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Datasets;