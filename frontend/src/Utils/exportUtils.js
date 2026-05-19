export const downloadFile = (
  blob,
  filename
) => {
  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.setAttribute(
    "download",
    filename
  );

  document.body.appendChild(link);

  link.click();

  link.remove();
};

export const exportCSV = (
  data,
  filename = "report.csv"
) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    data
      .map((row) => row.join(","))
      .join("\n");

  const encodedUri =
    encodeURI(csvContent);

  const link =
    document.createElement("a");

  link.setAttribute(
    "href",
    encodedUri
  );

  link.setAttribute(
    "download",
    filename
  );

  document.body.appendChild(link);

  link.click();

  link.remove();
};