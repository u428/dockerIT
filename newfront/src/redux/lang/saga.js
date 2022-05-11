import { all, takeEvery, call, put, fork } from "@redux-saga/core/effects";
import { GET_LANGUAGES} from "../actions";
import { fetchGetLanguagesList } from "../services/api";
import { notificationMessage } from "../services/notificationMessage";
import {getLanguagesSuccess, getLanguagesError } from "./actions";

function* watchGetLanguages() {
  yield takeEvery(GET_LANGUAGES, workGetLanguages);
}

function* workGetLanguages() {
  const { response, error } = yield call(fetchGetLanguagesList);

  if (response) {
    console.log(response);
    yield put(getLanguagesSuccess(response.data));
  } else {
    yield put(getLanguagesError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

export default function* languagesSaga() {
  yield all([
    fork(watchGetLanguages)
  ]);
}
