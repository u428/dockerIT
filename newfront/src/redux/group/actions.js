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
  
  export const getGroups = (req) => ({
    type: GET_GROUPS,
    payload: req,
  });
  
  export const getGroupsSuccess = (response) => ({
    type: GET_GROUPS_SUCCESS,
    payload: response,
  });
  
  export const getGroupsError = (error) => ({
    type: GET_GROUPS_ERROR,
    payload: error,
  });

  export const getGroupsTeacher = (req) => ({
    type: GET_GROUPS_TEACHER,
    payload: req,
  });
  
  export const getGroupsTeacherSuccess = (response) => ({
    type: GET_GROUPS_TEACHER_SUCCESS,
    payload: response,
  });
  
  export const getGroupsTeacherError = (error) => ({
    type: GET_GROUPS_TEACHER_ERROR,
    payload: error,
  });

  export const deleteGroup = (id) => ({
    type: DELETE_GROUP,
    id: id
  });
  
  export const deleteGroupSuccess = (response) => ({
    type: DELETE_GROUP_SUCCESS,
    payload: response,
  });
  
  export const deleteGroupError = (error) => ({
    type: DELETE_GROUP_ERROR,
    payload: error,
  });

  export const getSingleGroup = (id) => ({
    type: GET_SINGLE_GROUP,
    id: id
  });
  
  export const getSingleGroupSuccess = (response) => ({
    type: GET_SINGLE_GROUP_SUCCESS,
    payload: response,
  });
  
  export const getSingleGroupError = (error) => ({
    type: GET_SINGLE_GROUP_ERROR,
    payload: error,
  });

  export const postGroup = (history, req) => ({
    type: POST_GROUP,
    payload: {history, req}
  });
  
  export const postGroupSuccess = (response) => ({
    type: POST_GROUP_SUCCESS,
    payload: response,
  });
  
  export const postGroupError = (error) => ({
    type: POST_GROUP_ERROR,
    payload: error,
  });

  export const putGroup = (history, req) => ({
    type: PUT_GROUP,
    payload: {history, req}
  });
  
  export const putGroupSuccess = (response) => ({
    type: PUT_GROUP_SUCCESS,
    payload: response,
  });
  
  export const putGroupError = (error) => ({
    type: PUT_GROUP_ERROR,
    payload: error,
  });
  