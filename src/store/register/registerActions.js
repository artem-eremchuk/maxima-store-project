// import axiosClient from '../../axiosClient';
import { api } from '../../api/api';
import { REGISTER, REGISTER_ERROR } from "./registerConstants";

export const registerAction = (registerFormData) => {
  return dispatch => {
    api
      .register(registerFormData)
      .then(response => {
        if(response.status === 200){
          dispatch({
            type: REGISTER,
            payload: {
              registerData: registerFormData,
              response,
            },
          });
        } else {
          throw new Error(response.data.message);
        }
      })
      .catch(error => {
        dispatch({
          type: REGISTER_ERROR,
          payload: {
            message: error.message,
          },
        });
      })
  }
}