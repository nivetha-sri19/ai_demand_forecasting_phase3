const DatasetDetails = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-5">
        Dataset Details
      </h1>

      <div className="space-y-4">

        <p>
          Dataset Name: Sales_Data.csv
        </p>

        <p>
          Total Records: 1200
        </p>

        <p>
          Uploaded By: Admin
        </p>

        <p>
          Upload Date: 2026-05-28
        </p>

      </div>

    </div>
  );
};

export default DatasetDetails;