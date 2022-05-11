import { all, takeEvery, call, put, fork } from "@redux-saga/core/effects";
import { GET_PRODUCTS } from "../actions";
import { fetchGetProducts } from "../services/api";
import { notificationMessage } from "../services/notificationMessage";
import { getProductsError, getProductsSuccess } from "./actions";

function* watchGetProducts() {
  yield takeEvery(GET_PRODUCTS, workGetProducts);
}

function* workGetProducts() {
  const { response, error } = yield call(fetchGetProducts);

  if (response) {
    yield put(getProductsSuccess(response.data.data));
  } else {
    yield put(getProductsError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

export default function* productSaga() {
  yield all([fork(watchGetProducts)]);
}
