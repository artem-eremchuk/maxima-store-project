import { 
  REGISTER, 
  REGISTER_ERROR 
} from "./registerConstants";

const initState = {
  data: {},
  message: '',
  status: '',
}

const registerReducer = (state = initState, action) => {
  switch(action.type){  
    case REGISTER:
      return {
        ...state,
        data: action.payload.registerData,
        message: 'Успешная регистрация',
        status: 'success'
      } 
    case REGISTER_ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: 'error',
      }     
    default:
      return state;  
  }
}

export default registerReducer;