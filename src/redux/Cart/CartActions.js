import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from "../../actions";

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};

export const removeFromCart = (product) => {
  return { type: REMOVE_FROM_CART, payload: product };
};

export const increase = (product) => {
  return { type: INCREASE, payload: product };
};

export const decrease = (product) => {
  return { type: DECREASE, payload: product };
};

export const clear = () => {
  return { type: CLEAR };
};

export const checkout = () => {
  return { type: CHECKOUT };
};
