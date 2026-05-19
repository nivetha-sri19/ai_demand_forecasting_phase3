import API from "./axios";

// Get All Users
export const getUsers = async (
  page = 1,
  limit = 10
) => {
  try {
    const response = await API.get(
      `/admin/users?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get User By Id
export const getUserById = async (id) => {
  try {
    const response = await API.get(
      `/admin/users/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create User
export const createUser = async (payload) => {
  try {
    const response = await API.post(
      "/admin/users",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update User
export const updateUser = async (
  id,
  payload
) => {
  try {
    const response = await API.put(
      `/admin/users/${id}`,
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete User
export const deleteUser = async (id) => {
  try {
    const response = await API.delete(
      `/admin/users/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get System Analytics
export const getSystemAnalytics = async () => {
  try {
    const response = await API.get(
      "/admin/analytics"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Forecast Activities
export const getForecastActivities = async () => {
  try {
    const response = await API.get(
      "/admin/activities"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Uploaded Reports
export const getUploadedReports = async () => {
  try {
    const response = await API.get(
      "/admin/reports"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};