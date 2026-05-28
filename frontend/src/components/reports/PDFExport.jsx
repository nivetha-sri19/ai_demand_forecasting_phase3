const PDFExport = () => {

  const handleExport = () => {
    alert('PDF Export Started');
  };

  return (
    <button
      onClick={handleExport}
      className="bg-red-600 text-white px-5 py-3 rounded-lg"
    >

      Download PDF

    </button>
  );
};

export default PDFExport;