import {
  GET_STUDENTS,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,

  GET_STUDENTS_GROUP,
  GET_STUDENTS_GROUP_ERROR,
  GET_STUDENTS_GROUP_SUCCESS,
 
  GET_NEW_STUDENTS,
  GET_NEW_STUDENTS_ERROR,
  GET_NEW_STUDENTS_SUCCESS,

  DELETE_STUDENT,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR,

  GET_SINGLE_STUDENT,
  GET_SINGLE_STUDENT_SUCCESS,
  GET_SINGLE_STUDENT_ERROR,
  
  GET_SINGLE_GROUP_STUDENT,
  GET_SINGLE_GROUP_STUDENT_SUCCESS,
  GET_SINGLE_GROUP_STUDENT_ERROR,

  POST_STUDENT,
  POST_STUDENT_SUCCESS,
  POST_STUDENT_ERROR,
  
  POST_STUDENT_GROUP,
  POST_STUDENT_GROUP_ERROR,
  POST_STUDENT_GROUP_SUCCESS,

  POST_STUDENT_LOGIN,
  POST_STUDENT_LOGIN_ERROR,
  POST_STUDENT_LOGIN_SUCCESS,

  PUT_STUDENT,
  PUT_STUDENT_SUCCESS,
  PUT_STUDENT_ERROR,
 
  } from "../actions";
  
  const INIT_STATE = {
    loading: false,
    isActive: false,
    error: null,
    students: null,
    student: {},
    studentGroup:{},
    success: null,
    pagination:{
      current: 1,
      pageSize: 10
    }
  };
  
  export const studentReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
      case GET_STUDENTS:
        return { ...state, isActive: false, loading: true };
      case GET_STUDENTS_SUCCESS:
        return { ...state, loading: false, isActive: true, students: payload.students, pagination:{...payload.pagination}};
      case GET_STUDENTS_ERROR:
        return { ...state, loading: false, isActive: false, error: payload, students: {} };

        case GET_STUDENTS_GROUP:
        return { ...state, isActive: false, loading: true };
      case GET_STUDENTS_GROUP_SUCCESS:
        return { ...state, loading: false, isActive: true, students: payload};
      case GET_STUDENTS_GROUP_ERROR:
        return { ...state, loading: false, isActive: false, error: payload, students: {} };

        case GET_NEW_STUDENTS:
          return { ...state, isActive: false, loading: true };
        case GET_NEW_STUDENTS_SUCCESS:
          return { ...state, loading: false, isActive: true, students: payload.students, pagination:{...payload.pagination}};
        case GET_NEW_STUDENTS_ERROR:
          return { ...state, loading: false, isActive: false, error: payload, students: {} };

      case DELETE_STUDENT:
        return { ...state, isActive: false, loading: true };
      case DELETE_STUDENT_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload};
      case DELETE_STUDENT_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };
        
      case GET_SINGLE_STUDENT:
          return { ...state, loading: true, isActive: false};
      case GET_SINGLE_STUDENT_SUCCESS:
          return { ...state, loading: false, isActive: true, student: payload };
      case GET_SINGLE_STUDENT_ERROR:
          return { ...state, loading: false,isActive: false, error: payload };

      case GET_SINGLE_GROUP_STUDENT:
          return { ...state, loading: true, isActive: false};
      case GET_SINGLE_GROUP_STUDENT_SUCCESS:
          return { ...state, loading: false, isActive: true, studentGroup: payload };
      case GET_SINGLE_GROUP_STUDENT_ERROR:
          return { ...state, loading: false,isActive: false, error: payload };

      case POST_STUDENT:
        return { ...state, loading: true , isActive: false};
      case POST_STUDENT_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload };
      case POST_STUDENT_ERROR:
        return { ...state, loading: false, error: payload };

        case POST_STUDENT_GROUP:
        return { ...state, loading: true , isActive: false};
      case POST_STUDENT_GROUP_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload };
      case POST_STUDENT_GROUP_ERROR:
        return { ...state, loading: false, error: payload };

        case POST_STUDENT_LOGIN:
        return { ...state, loading: true , isActive: false};
      case POST_STUDENT_LOGIN_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload };
      case POST_STUDENT_LOGIN_ERROR:
        return { ...state, loading: false, error: payload };

        case PUT_STUDENT:
        return { ...state, loading: true , isActive: false};
      case PUT_STUDENT_SUCCESS:
        return { ...state, loading: false, isActive: true, success: payload };
      case PUT_STUDENT_ERROR:
        return { ...state, loading: false, error: payload };

      default:
        return { ...state };
    }
  };
  