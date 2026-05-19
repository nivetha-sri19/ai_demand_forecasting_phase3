import API from "./axios";

// Upload Dataset
export const uploadDataset = async (
  formData
) => {
  try {
    const response = await API.post(
      "/datasets/upload",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get All Datasets
export const getDatasets = async (
  page = 1,
  limit = 10,
  search = ""
) => {
  try {
    const response = await API.get(
      `/datasets?page=${page}&limit=${limit}&search=${search}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Dataset By Id
export const getDatasetById = async (id) => {
  try {
    const response = await API.get(
      `/datasets/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete Dataset
export const deleteDataset = async (id) => {
  try {
    const response = await API.delete(
      `/datasets/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update Dataset
export const updateDataset = async (
  id,
  payload
) => {
  try {
    const response = await API.put(
      `/datasets/${id}`,
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Search Dataset
export const searchDatasets = async (
  query
) => {
  try {
    const response = await API.get(
      `/datasets/search?query=${query}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};