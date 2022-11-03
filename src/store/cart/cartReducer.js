import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART
} from './cartConstants';

const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...action.payload
      ]
    case DELETE_FROM_CART:
      return [
        ...state.filter(product => product.id !== action.payload)
      ]
    case GET_CART:
      return [
        ...action.payload
      ]
    default:
      return state;
  }
}

export default cartReducer;