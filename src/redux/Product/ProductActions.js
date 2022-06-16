import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../../actions";

const getProductsRequest = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

const getProductsSuccess = (products) => {
  return { type: GET_PRODUCTS_SUCCESS, payload: products };
};

const getProductsError = (error) => {
  return { type: GET_PRODUCTS_ERROR, payload: error };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(getProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(getProductsSuccess(products));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(getProductsError(errMsg));
      });
  };
};
