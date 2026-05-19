const ExportButtons = () => {
  const exportPDF = () => {
    console.log("Export PDF");
  };

  const exportExcel = () => {
    console.log("Export Excel");
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={exportPDF}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
      >
        Export PDF
      </button>

      <button
        onClick={exportExcel}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl"
      >
        Export Excel
      </button>
    </div>
  );
};

export default ExportButtons;