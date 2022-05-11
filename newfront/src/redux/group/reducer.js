import {
    GET_GROUPS,
    GET_GROUPS_SUCCESS,
    GET_GROUPS_ERROR,
    
    GET_GROUPS_TEACHER,
    GET_GROUPS_TEACHER_SUCCESS,
    GET_GROUPS_TEACHER_ERROR,
    
    DELETE_GROUP,
    DELETE_GROUP_SUCCESS,
    DELETE_GROUP_ERROR,

    GET_SINGLE_GROUP,
    GET_SINGLE_GROUP_SUCCESS,
    GET_SINGLE_GROUP_ERROR,
    
    PUT_GROUP,
    PUT_GROUP_SUCCESS,
    PUT_GROUP_ERROR,

    POST_GROUP,
    POST_GROUP_SUCCESS,
    POST_GROUP_ERROR,
  } from "../actions";
  
  const INIT_STATE = {
    loading: false,
    isActive: false,
    error: null,
    groups: null,
    success: null,
    pagination:{
      current: 1,
      pageSize: 10
    },
    group: {}
  };
  
  export const groupReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
      case GET_GROUPS:
        return { ...state, isActive: false, loading: true };
      case GET_GROUPS_SUCCESS:
        return { ...state, loading: false, isActive: true, groups: payload.groups, pagination:{...payload.pagination}};
      case GET_GROUPS_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case GET_GROUPS_TEACHER:
        return { ...state, isActive: false, loading: true };
      case GET_GROUPS_TEACHER_SUCCESS:
        return { ...state, loading: false, isActive: true, groups: payload};
      case GET_GROUPS_TEACHER_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case DELETE_GROUP:
        return { ...state, isActive: false, loading: true };
      case DELETE_GROUP_SUCCESS:
        return { ...state, loading: false, isActive: true};
      case DELETE_GROUP_ERROR:
        return { ...state, loading: false, isActive: false, error: payload };

      case GET_SINGLE_GROUP:
          return { ...state, loading: true};
      case GET_SINGLE_GROUP_SUCCESS:
          return { ...state, loading: false, isActive: true, group: payload };
      case GET_SINGLE_GROUP_ERROR:
          return { ...state, loading: false,isActive: false, error: payload };

      case POST_GROUP:
        return { ...state, loading: true };
      case POST_GROUP_SUCCESS:
        return { ...state, loading: false};
      case POST_GROUP_ERROR:
        return { ...state, loading: false, error: payload };

        case PUT_GROUP:
        return { ...state, loading: true };
      case PUT_GROUP_SUCCESS:
        return { ...state, loading: false };
      case PUT_GROUP_ERROR:
        return { ...state, loading: false, error: payload };
      default:
        return { ...state };
    }
  };
  