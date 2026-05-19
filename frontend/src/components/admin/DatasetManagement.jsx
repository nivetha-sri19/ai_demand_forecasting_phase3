import { useState } from "react";

const DatasetManagement = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    console.log(file);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-5">
        Dataset Management
      </h2>

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
        className="border p-3 rounded-xl w-full"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-5 py-3 rounded-xl mt-5"
      >
        Upload Dataset
      </button>
    </div>
  );
};

export default DatasetManagement;