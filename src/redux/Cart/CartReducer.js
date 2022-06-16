import {
  ADD_TO_CART,
  CHECKOUT,
  CLEAR,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from "../../actions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const updatedCart = [...state.cart];
      updatedCart.push({ ...action.payload, quantity: 1 });
      return { ...state, cart: updatedCart };
    }
    case REMOVE_FROM_CART: {
      const updatedCart = [...state.cart];
      const filteredCart = updatedCart.filter(
        (i) => i.id !== action.payload.id
      );
      return { ...state, cart: filteredCart };
    }
    case INCREASE: {
      const updatedCart = [...state.cart];
      const findIndex = updatedCart.findIndex(
        (i) => i.id === action.payload.id
      );
      updatedCart[findIndex].quantity++;
      return { ...state, cart: updatedCart };
    }
    case DECREASE: {
      const updatedCart = [...state.cart];
      const findIndex = updatedCart.findIndex(
        (i) => i.id === action.payload.id
      );
      updatedCart[findIndex].quantity--;
      return { ...state, cart: updatedCart };
    }
    case CLEAR: {
      return { cart: [] };
    }
    case CHECKOUT: {
      return { cart: [] };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
