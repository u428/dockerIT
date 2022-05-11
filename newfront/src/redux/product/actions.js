import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (response) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: response,
});

export const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});
