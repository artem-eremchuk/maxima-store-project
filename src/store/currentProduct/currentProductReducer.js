import { ADD_CURRENT_PRODUCT } from './currentProductConstants';

const initState = null;

const currentProductReducer = (state = initState, action) => {
  switch(action.type){  
    case ADD_CURRENT_PRODUCT:
      return {
        ...action.payload
      }
    default:
      return state;  
  }
}

export default currentProductReducer;