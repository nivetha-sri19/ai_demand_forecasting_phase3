import {
  loginUser,
  registerUser
} from '../api/authApi';

export const loginService = async (
  credentials
) => {

  try {

    const response =
      await loginUser(credentials);

    localStorage.setItem(
      'token',
      response.token
    );

    return response;

  } catch (error) {

    throw error;
  }
};

export const registerService =
  async (data) => {

    try {

      const response =
        await registerUser(data);

      return response;

    } catch (error) {

      throw error;
    }
  };