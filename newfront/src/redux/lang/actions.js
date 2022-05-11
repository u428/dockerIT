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
  
  export const getLanguages = () => ({
    type: GET_LANGUAGES
  });
  
  export const getLanguagesSuccess = (response) => ({
    type: GET_LANGUAGES_SUCCESS,
    payload: response,
  });
  
  export const getLanguagesError = (error) => ({
    type: GET_LANGUAGES_ERROR,
    payload: error,
  });

  export const deleteLanguage = (id) => ({
    type: DELETE_LANGUAGE,
    id: id
  });
  
  export const deleteLanguageSuccess = (response) => ({
    type: DELETE_LANGUAGE_SUCCESS,
    payload: response,
  });
  
  export const deleteLanguageError = (error) => ({
    type: DELETE_LANGUAGE_ERROR,
    payload: error,
  });

  export const getSingleLanguage = (id) => ({
    type: GET_SINGLE_LANGUAGE,
    payload: id
  });
  
  export const getSingleLanguageSuccess = (response) => ({
    type: GET_SINGLE_LANGUAGE_SUCCESS,
    payload: response,
  });
  
  export const getSingleLanguageError = (error) => ({
    type: GET_SINGLE_LANGUAGE_ERROR,
    payload: error,
  });

  export const postLanguage = (history, req) => ({
    type: POST_LANGUAGE,
    payload: {history, req}
  });
  
  export const postLanguageSuccess = (response) => ({
    type: POST_LANGUAGE_SUCCESS,
    payload: response,
  });
  
  export const postLanguageError = (error) => ({
    type: POST_LANGUAGE_ERROR,
    payload: error,
  });
  