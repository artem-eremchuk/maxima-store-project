import { api } from "../../api/api";
import { 
  ADD_TO_CART, 
  DELETE_FROM_CART, 
  GET_CART
} from "./cartConstants";

export const addToCart = (id) => {
  return async dispatch => {
    try {
      const response = await api.addProductToCart(id);

      if(response.status === 200){
        const cart = await api.getCart();

        dispatch({
          type: ADD_TO_CART,
          payload: cart.data
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const getCart = () => {
  return async dispatch => {
    try {
      const cart = await api.getCart();

      dispatch({
        type: GET_CART,
        payload: cart.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteFromCart = (id) => {
  return async dispatch => {
    try {
      const response = await api.deleteProductFromCart(id);

      if(response.status === 200){
        dispatch({
          type: DELETE_FROM_CART,
          payload: id
        })
      }
    } catch (error) {
      console.log(error); 
    }
  }
} 