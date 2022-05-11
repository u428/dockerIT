import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions";

const INIT_STATE = {
  loading: false,
  error: null,
  products: null,
};

export const productReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload };
    case GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
