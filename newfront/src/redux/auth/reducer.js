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

const INIT_STATE = {
  loading: false,
  userData: null,
  error: null,
};

export const authReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return { ...state, loading: true };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false, userData: payload };
    case AUTH_LOGIN_ERROR:
      return { ...state, loading: false, error: payload };
    case AUTH_LOGOUT:
      return { ...state, loading: true };
    case AUTH_LOGOUT_SUCCESS:
      return { ...state, loading: false, userData: null };
    case AUTH_LOGOUT_ERROR:
      return { ...state, loading: false, error: payload };
    case AUTH_ME:
      return { ...state, loading: true };
    case AUTH_ME_SUCCESS:
      return { ...state, loading: false, userData: payload };
    case AUTH_ME_ERROR:
      return { ...state, loading: false, error: payload };
    case AUTH_SETTING:
      return { ...state, loading: true };
    case AUTH_SETTING_SUCCESS:
      return { ...state, loading: false, userData: payload };
    case AUTH_SETTING_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
