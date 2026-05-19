import API from "./axios";

// Login User
export const loginUser = async (
  payload
) => {
  try {
    const response = await API.post(
      "/auth/login",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Register User
export const registerUser = async (
  payload
) => {
  try {
    const response = await API.post(
      "/auth/register",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Current User
export const getCurrentUser =
  async () => {
    try {
      const response =
        await API.get("/auth/me");

      return response.data;
    } catch (error) {
      throw error;
    }
  };

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};