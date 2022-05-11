import {
  GET_LANGUAGES,
  GET_LANGUAGES_ERROR,
  GET_LANGUAGES_SUCCESS,

  DELETE_LANGUAGE,
  DELETE_LANGUAGE_SUCCESS,
  DELETE_LANGUAGE_ERROR,

  GET_SINGLE_LANGUAGE,
  GET_SINGLE_LANGUAGE_ERROR,
  GET_SINGLE_LANGUAGE_SUCCESS,

  POST_LANGUAGE,
  POST_LANGUAGE_ERROR,
  POST_LANGUAGE_SUCCESS,
  } from "../actions";
  
  const INIT_STATE = {
    loading: false,
    isActive: false,
    error: null,
    language: null
  };
  
  export const languageReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
      case GET_LANGUAGES:
        return { ...state, isActive: false, loading: true };
      case GET_LANGUAGES_SUCCESS:
        return { ...state, loading: false, isActive: true, language: payload};
      case GET_LANGUAGES_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case DELETE_LANGUAGE:
        return { ...state, isActive: false, loading: true };
      case DELETE_LANGUAGE_SUCCESS:
        return { ...state, loading: false, isActive: true};
      case DELETE_LANGUAGE_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case GET_SINGLE_LANGUAGE:
          return { ...state, loading: true};
      case GET_SINGLE_LANGUAGE_SUCCESS:
          return { ...state, loading: false, isActive: true, language: payload };
      case GET_SINGLE_LANGUAGE_ERROR:
          return { ...state, loading: false,isActive: false, error: payload };

      case POST_LANGUAGE:
        return { ...state, loading: true };
      case POST_LANGUAGE_SUCCESS:
        return { ...state, loading: false, language: payload };
      case POST_LANGUAGE_ERROR:
        return { ...state, loading: false, error: payload };
      default:
        return { ...state };
    }
  };
  