import {
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,

  AUTH_LOGOUT,
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_SUCCESS,

  AUTH_ME,
  AUTH_ME_ERROR,
  AUTH_ME_SUCCESS,

  AUTH_SETTING,
  AUTH_SETTING_ERROR,
  AUTH_SETTING_SUCCESS,
  
} from "../actions";

export const authLogin = (history, req) => ({
  type: AUTH_LOGIN,
  payload: { history, req },
});

export const authLoginSuccess = (res) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: res,
});

export const authLoginError = (error) => ({
  type: AUTH_LOGIN_ERROR,
  payload: error,
});

export const authLogout = (history) => ({
  type: AUTH_LOGOUT,
  payload: history,
});

export const authLogoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCCESS,
});

export const authLogoutError = (error) => ({
  type: AUTH_LOGOUT_ERROR,
  payload: error,
});

export const authMe = (history) => ({
  type: AUTH_ME,
  payload: history,
});

export const authMeSuccess = (res) => ({
  type: AUTH_ME_SUCCESS,
  payload: res,
});

export const authMeError = (error) => ({
  type: AUTH_ME_ERROR,
  payload: error,
});

export const authSetting = (req) => ({
  type: AUTH_SETTING,
  payload: req,
});

export const authSettingSuccess = (res) => ({
  type: AUTH_SETTING_SUCCESS,
  payload: res,
});

export const authSettingError = (error) => ({
  type: AUTH_SETTING_ERROR,
  payload: error,
});
