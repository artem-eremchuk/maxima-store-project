import { ADD_CURRENT_PRODUCT } from './currentProductConstants';

export const addCurrentProduct = (product) => {
  return {
    type: ADD_CURRENT_PRODUCT,
    payload: product
  }
};

