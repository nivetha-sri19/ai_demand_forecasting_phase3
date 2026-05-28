const KPISection = () => {
  return (
    <div className="grid grid-cols-3 gap-5">

      <div className="bg-white p-5 rounded-xl shadow">

        <h2 className="text-lg font-semibold">
          Forecast Success
        </h2>

        <p className="text-3xl font-bold mt-3">
          94%
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow">

        <h2 className="text-lg font-semibold">
          Active Users
        </h2>

        <p className="text-3xl font-bold mt-3">
          1,240
        </p>

      </div>

      <div className="bg-white p-5 rounded-xl shadow">

        <h2 className="text-lg font-semibold">
          Total Revenue
        </h2>

        <p className="text-3xl font-bold mt-3">
          $450K
        </p>

      </div>

    </div>
  );
};

export default KPISection;