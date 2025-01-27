// src/redux/actions/authActions.js
import axios from 'axios';
import { BASE_URL } from '../../halper/ApiInfo';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (userData) => {
  return async (dispatch) => {
    const { email, password } = userData;

    try {
      let data = new FormData();
      data.append('email', email);
      data.append('password', password);

      const config = {
        method: 'post',
        url: `${BASE_URL}login`,
        data: data,
      };

      // Make the API request
      const response = await axios(config);
      const error =response?.data?.messages || 'Login failed. Please try again.';
      console.log(response.data);

      console.log(error);
      
      if (response?.data?.status) {
        const user = response.data.data
        // const userId = response?.data?.pid;
console.log(user);

// console.log(userId);


        localStorage.setItem('authToken',JSON.stringify(user) );

        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user},
        });

        // setShowSuccessToast(true); 
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          error: error,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        error: 'Login failed. Please try again.',
      });
    }
  };
};

// Action to log out the user
export const logout = () => {
  localStorage.removeItem('authToken');
  return { type: LOGOUT };
};
