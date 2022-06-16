import { combineReducers } from "redux";
import cartReducer from "./Cart/CartReducer";
import productsReducer from "./Product/ProductReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
});

export default rootReducer;
