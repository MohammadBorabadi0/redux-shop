import { combineReducers } from "redux";
import productsReducer from "./Product/ProductReducer";

const rootReducer = combineReducers({
  productsState: productsReducer,
});

export default rootReducer;
