import { combineReducers } from 'redux';
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';
import currentProductReducer from './currentProduct/currentProductReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  currentProduct: currentProductReducer,
  cart: cartReducer,
});

export default rootReducer;