// import axiosClient from '../../axiosClient';
import { api } from '../../api/api';
import { 
  LOGIN, 
  LOGIN_ERROR,
  VALID_TOKEN, 
  UNAUTHORIZED 
} from './loginConstants';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

export const loginAction = (loginFormData) => {
  return async dispatch => {
    try {
      const response = await api.login(loginFormData);

      if (response.status === 200){
        Cookies.set('access_token', response.data.access_token.token);
        Cookies.set('refresh_token', response.data.refresh_token.token);

        const access_token = Cookies.get('access_token');

        if (access_token) {
          const { sub: userName } = jwt_decode(access_token);

          dispatch({
            type: LOGIN,
            payload: {
              loginData: {...loginFormData, userName },
              response,
            }
          });
        }
      }

      if (response.status === 401){
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            loginData: loginFormData,
            response: {
              message: response.data.message,
            }
          }
        });
      }
    } catch (error) {
      dispatch({
        type: UNAUTHORIZED,
        payload: error.data.message
      });
    }
  }
}

export const validToken = (accessToken) => {
  return async dispatch => {
    try {
      const response = await api.validate(accessToken);

      if (response.status === 200) {
        const access_token = Cookies.get('access_token');

        if (access_token) {
          const { sub: userName } = jwt_decode(access_token);

          dispatch({
            type: VALID_TOKEN,
            payload: { ...response, userName },
          });
        } 
      } else {
        dispatch({
          type: UNAUTHORIZED,
          payload: response.data.message,
        });
      }
    } catch (error) {
      if (error.status === 401){
        dispatch({
          type: UNAUTHORIZED,
          payload: error.response
        });
      }
    }
  }
}