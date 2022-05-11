import { all, takeEvery, call, put, fork } from "@redux-saga/core/effects";
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ME, AUTH_SETTING } from "../actions";
import { fetchAuthLogin, fetchAuthMe, fetchAuthSetting } from "../services/api";
import { notificationMessage } from "../services/notificationMessage";
import {
  authLoginError,
  authLoginSuccess,
  authLogoutError,
  authLogoutSuccess,
  authMe,
  authMeError,
  authMeSuccess,
  authSettingError,
  authSettingSuccess,
} from "./action";

function* watchAuthLogin() {
  yield takeEvery(AUTH_LOGIN, workAuthLogin);
}

function* workAuthLogin({ payload }) {
  const { history, req } = payload;
  const { response, error } = yield call(fetchAuthLogin, req);
  if (response) {
    const { data } = response;
    yield put(authLoginSuccess(data));
    localStorage.setItem("token", `Bearer ${data.token}`);
    localStorage.setItem("role", `${data.role.name}`);
    yield put(authMe(history));
  } else {
    yield put(authLoginError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

function* watchAuthLogout() {
  yield takeEvery(AUTH_LOGOUT, workAuthLogout);
}

function* workAuthLogout({ payload }) {
  const history = payload;
  try {
    localStorage.clear();
    yield put(authLogoutSuccess());
    notificationMessage("success", "chiqib kettiz");
    history.push("/");
  } catch (error) {
    console.log(error);
    yield put(authLogoutError(error));
    notificationMessage("error", "chiqishda hatolik");
  }
}

function* watchAuthMe() {
  yield takeEvery(AUTH_ME, workAuthMe);
}

function* workAuthMe({ payload }) {
  const history = payload;

  const token = localStorage.getItem("token");

  const { response, error } = yield call(fetchAuthMe, token);

  if (response) {
    yield put(authMeSuccess(response.data));
    notificationMessage("success", "You have been LogIn");
    if (history) {
      history.push("/");
    }
  } else {
    yield put(authMeError(error.response.data.message));
    notificationMessage("error", error.response.data.message);

    localStorage.clear();
    window.location.reload();
  }
}

function* watchAuthSetting() {
  yield takeEvery(AUTH_SETTING, workAuthSetting);
}

function* workAuthSetting({ payload }) {
  const req = payload;

  const { response, error } = yield call(fetchAuthSetting, req);

  if (response) {
    yield put(authSettingSuccess(response.data.data));
    notificationMessage("success", "narmalni uzgardi");
  } else {
    yield put(authSettingError(error));
    notificationMessage("error", error.response.data.message);
  }
}

export default function* authSaga() {
  yield all([
    fork(watchAuthLogin),
    fork(watchAuthLogout),
    fork(watchAuthMe),
    fork(watchAuthSetting),
  ]);
}
