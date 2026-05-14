function UploadBox({ onChange }) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center bg-white hover:border-blue-500 transition-all duration-300">
      <input
        type="file"
        onChange={onChange}
      />

      <p className="mt-5 text-gray-500">
        Upload CSV or Excel Dataset
      </p>
    </div>
  );
}

export default UploadBox;