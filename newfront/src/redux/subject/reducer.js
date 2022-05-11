import {
  GET_SUBJECTS,
  GET_SUBJECTS_ERROR,
  GET_SUBJECTS_SUCCESS,

  DELETE_SUBJECT,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_ERROR,

  GET_SINGLE_SUBJECT,
  GET_SINGLE_SUBJECT_ERROR,
  GET_SINGLE_SUBJECT_SUCCESS,

  PUT_SUBJECT,
  PUT_SUBJECT_ERROR,
  PUT_SUBJECT_SUCCESS,

  POST_SUBJECT,
  POST_SUBJECT_ERROR,
  POST_SUBJECT_SUCCESS,
  } from "../actions";
  
  const INIT_STATE = {
    loading: false,
    isActive: false,
    error: null,
    subjects: [],
    success: null,
    subject: {}
  };
  
  export const subjectReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
      case GET_SUBJECTS:
        return { ...state, isActive: false, loading: true };
      case GET_SUBJECTS_SUCCESS:
        return { ...state, loading: false, isActive: true, subjects: payload};
      case GET_SUBJECTS_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case DELETE_SUBJECT:
        return { ...state, isActive: false, loading: true };
      case DELETE_SUBJECT_SUCCESS:
        return { ...state, loading: false, isActive: true};
      case DELETE_SUBJECT_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case GET_SINGLE_SUBJECT:
          return { ...state, loading: true};
      case GET_SINGLE_SUBJECT_SUCCESS:
          return { ...state, loading: false, isActive: true, subject: payload };
      case GET_SINGLE_SUBJECT_ERROR:
          return { ...state, loading: false,isActive: false, error: payload };

      case POST_SUBJECT:
        return { ...state, loading: true };
      case POST_SUBJECT_SUCCESS:
        return { ...state, loading: false};
      case POST_SUBJECT_ERROR:
        return { ...state, loading: false, error: payload };

        case PUT_SUBJECT:
        return { ...state, loading: true };
      case PUT_SUBJECT_SUCCESS:
        return { ...state, loading: false };
      case PUT_SUBJECT_ERROR:
        return { ...state, loading: false, error: payload };
      default:
        return { ...state };
    }
  };
  