import {
    GET_TEACHERS,
    GET_TEACHERS_ERROR,
    GET_TEACHERS_SUCCESS,

    DELETE_TEACHER,
    DELETE_TEACHER_SUCCESS,
    DELETE_TEACHER_ERROR,

    GET_SINGLE_TEACHER,
    GET_SINGLE_TEACHER_ERROR,
    GET_SINGLE_TEACHER_SUCCESS,

    POST_TEACHERS,
    POST_TEACHERS_ERROR,
    POST_TEACHERS_SUCCESS,

    PUT_TEACHERS,
    PUT_TEACHERS_ERROR,
    PUT_TEACHERS_SUCCESS,
  } from "../actions";
  
  const INIT_STATE = {
    loading: false,
    isActive: false,
    error: null,
    teachers: null,
    teacher: {},
    success: null,
    pagination:{
      current: 1,
      pageSize: 10
    }
  };
  
  export const teacherReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
      case GET_TEACHERS:
        return { ...state, isActive: false, loading: true };
      case GET_TEACHERS_SUCCESS:
        return { ...state, loading: false, isActive: true, teachers: payload.returns, pagination:{...payload.pagination}};
      case GET_TEACHERS_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case DELETE_TEACHER:
        return { ...state, isActive: false, loading: true };
      case DELETE_TEACHER_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload};
      case DELETE_TEACHER_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case GET_SINGLE_TEACHER:
          return { ...state, loading: true, isActive: false};
      case GET_SINGLE_TEACHER_SUCCESS:
          return { ...state, loading: false, isActive: true, teacher: payload };
      case GET_SINGLE_TEACHER_ERROR:
          return { ...state, loading: false,isActive: false, error: payload };

      case POST_TEACHERS:
        return { ...state, loading: true , isActive: false};
      case POST_TEACHERS_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload };
      case POST_TEACHERS_ERROR:
        return { ...state, loading: false, error: payload };

        case PUT_TEACHERS:
        return { ...state, loading: true , isActive: false};
      case PUT_TEACHERS_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload };
      case PUT_TEACHERS_ERROR:
        return { ...state, loading: false, error: payload };

      default:
        return { ...state };
    }
  };
  