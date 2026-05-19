import DatasetManagement from "../components/admin/DatasetManagement";

const Datasets = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Datasets
      </h1>

      <DatasetManagement />
    </div>
  );
};

export default Datasets;