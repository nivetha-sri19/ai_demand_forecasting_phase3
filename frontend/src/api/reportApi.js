import API from "./axios";

// Get All Reports
export const getReports = async (
  page = 1,
  limit = 10
) => {
  try {
    const response = await API.get(
      `/reports?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Report By Id
export const getReportById = async (id) => {
  try {
    const response = await API.get(
      `/reports/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Generate Report
export const generateReport = async (payload) => {
  try {
    const response = await API.post(
      "/reports/generate",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Download PDF Report
export const downloadPDFReport = async (id) => {
  try {
    const response = await API.get(
      `/reports/${id}/pdf`,
      {
        responseType: "blob",
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Download Excel Report
export const downloadExcelReport = async (id) => {
  try {
    const response = await API.get(
      `/reports/${id}/excel`,
      {
        responseType: "blob",
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete Report
export const deleteReport = async (id) => {
  try {
    const response = await API.delete(
      `/reports/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Search Reports
export const searchReports = async (query) => {
  try {
    const response = await API.get(
      `/reports/search?query=${query}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};