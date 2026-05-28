const ExcelExport = () => {

  const handleExport = () => {
    alert('Excel Export Started');
  };

  return (
    <button
      onClick={handleExport}
      className="bg-green-600 text-white px-5 py-3 rounded-lg"
    >

      Download Excel

    </button>
  );
};

export default ExcelExport;