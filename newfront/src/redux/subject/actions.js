import {
    GET_SUBJECTS,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_ERROR,
    

    DELETE_SUBJECT,
    DELETE_SUBJECT_SUCCESS,
    DELETE_SUBJECT_ERROR,

    GET_SINGLE_SUBJECT,
    GET_SINGLE_SUBJECT_SUCCESS,
    GET_SINGLE_SUBJECT_ERROR,
    
    PUT_SUBJECT,
    PUT_SUBJECT_SUCCESS,
    PUT_SUBJECT_ERROR,

    POST_SUBJECT,
    POST_SUBJECT_SUCCESS,
    POST_SUBJECT_ERROR,
    
  } from "../actions";
  
  export const getSubjects = () => ({
    type: GET_SUBJECTS
  });
  
  export const getSubjectsSuccess = (response) => ({
    type: GET_SUBJECTS_SUCCESS,
    payload: response,
  });
  
  export const getSubjectsError = (error) => ({
    type: GET_SUBJECTS_ERROR,
    payload: error,
  });

  export const deleteSubject = (id) => ({
    type: DELETE_SUBJECT,
    id: id
  });
  
  export const deleteSubjectSuccess = (response) => ({
    type: DELETE_SUBJECT_SUCCESS,
    payload: response,
  });
  
  export const deleteSubjectError = (error) => ({
    type: DELETE_SUBJECT_ERROR,
    payload: error,
  });

  export const getSingleSubject = (id) => ({
    type: GET_SINGLE_SUBJECT,
    id: id
  });
  
  export const getSingleSubjectSuccess = (response) => ({
    type: GET_SINGLE_SUBJECT_SUCCESS,
    payload: response,
  });
  
  export const getSingleSubjectError = (error) => ({
    type: GET_SINGLE_SUBJECT_ERROR,
    payload: error,
  });

  export const postSubject = (history, req) => ({
    type: POST_SUBJECT,
    payload: {history, req}
  });
  
  export const postSubjectSuccess = (response) => ({
    type: POST_SUBJECT_SUCCESS,
    payload: response,
  });
  
  export const postSubjectError = (error) => ({
    type: POST_SUBJECT_ERROR,
    payload: error,
  });

  export const putSubject = (history, req) => ({
    type: PUT_SUBJECT,
    payload: {history, req}
  });
  
  export const putSubjectSuccess = (response) => ({
    type: PUT_SUBJECT_SUCCESS,
    payload: response,
  });
  
  export const putSubjectError = (error) => ({
    type: PUT_SUBJECT_ERROR,
    payload: error,
  });
  