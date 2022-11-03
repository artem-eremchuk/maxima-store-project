import { LOGIN, VALID_TOKEN, UNAUTHORIZED, LOGIN_ERROR } from "./loginConstants";

const initState = {
  data: {},
  message: '',
  status: '',
  accessToken: '',
  refreshToken: '',
  isAuth: false,
  userName: '',
}

const loginReducer = (state = initState, action) => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        data: action.payload.loginData,
        message: 'Успешная авторизация',
        status: 'success',
        accessToken: action.payload.response.data.access_token.token,
        refreshToken: action.payload.response.data.refresh_token.token,
        isAuth: true,
        userName: action.payload.loginData.userName,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        data: action.payload.loginData,
        message: action.payload.response.message,
        status: 'error', 
      }    
    case VALID_TOKEN: 
      return {
          ...state, 
          isAuth: true,
          userName: action.payload.userName,
        }
    case UNAUTHORIZED: 
      return {
          ...state, 
          status: action.payload.status,
          message: action.payload.data.message
        }            
    default: 
      return state;  
  }
}

export default loginReducer;