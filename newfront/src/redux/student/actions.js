import {
    GET_STUDENTS,
    GET_STUDENTS_ERROR,
    GET_STUDENTS_SUCCESS,

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
    GET_SINGLE_STUDENT_ERROR,
    GET_SINGLE_STUDENT_SUCCESS,

    GET_SINGLE_GROUP_STUDENT,
    GET_SINGLE_GROUP_STUDENT_SUCCESS,
    GET_SINGLE_GROUP_STUDENT_ERROR,

    POST_STUDENT,
    POST_STUDENT_ERROR,
    POST_STUDENT_SUCCESS,

    POST_STUDENT_GROUP,
    POST_STUDENT_GROUP_ERROR,
    POST_STUDENT_GROUP_SUCCESS,

    POST_STUDENT_LOGIN,
    POST_STUDENT_LOGIN_ERROR,
    POST_STUDENT_LOGIN_SUCCESS,

    PUT_STUDENT,
    PUT_STUDENT_ERROR,
    PUT_STUDENT_SUCCESS,
  } from "../actions";
  
  export const getNewStudents = (req) => ({
    type: GET_NEW_STUDENTS,
    payload: req,
  });
  
  export const getNewStudentsSuccess = (response) => ({
    type: GET_NEW_STUDENTS_SUCCESS,
    payload: response,
  });
  
  export const getNewStudentsError = (error) => ({
    type: GET_NEW_STUDENTS_ERROR,
    payload: error,
  });


  export const getStudents = (req) => ({
    type: GET_STUDENTS,
    payload: req,
  });
  
  export const getStudentsSuccess = (response) => ({
    type: GET_STUDENTS_SUCCESS,
    payload: response,
  });
  
  export const getStudentsError = (error) => ({
    type: GET_STUDENTS_ERROR,
    payload: error,
  });

  
  export const getStudentsGroup = (req) => ({
    type: GET_STUDENTS_GROUP,
    payload: req,
  });
  
  export const getStudentsGroupSuccess = (response) => ({
    type: GET_STUDENTS_GROUP_SUCCESS,
    payload: response,
  });
  
  export const getStudentsGroupError = (error) => ({
    type: GET_STUDENTS_GROUP_ERROR,
    payload: error,
  });

  export const deleteNewStudent = (id) => ({
    type: DELETE_STUDENT,
    id: id
  });
  
  export const deleteNewStudentSuccess = (response) => ({
    type: DELETE_STUDENT_SUCCESS,
    payload: response,
  });
  
  export const deleteNewStudentError = (error) => ({
    type: DELETE_STUDENT_ERROR,
    payload: error,
  });

  export const getSingleGroupStudent = (id) => ({
    type: GET_SINGLE_GROUP_STUDENT,
    payload: id
  });

  export const getSingleGroupStudentSuccess = (response) => ({
    type: GET_SINGLE_GROUP_STUDENT_SUCCESS,
    payload: response,
  });
  
  export const getSingleGroupStudentError = (error) => ({
    type: GET_SINGLE_GROUP_STUDENT_ERROR,
    payload: error,
  });

  export const getSingleStudent = (history, req) => ({
    type: GET_SINGLE_STUDENT,
    payload: {history, req}
  });
  
  export const getSingleStudentSuccess = (response) => ({
    type: GET_SINGLE_STUDENT_SUCCESS,
    payload: response,
  });
  
  export const getSingleStudentError = (error) => ({
    type: GET_SINGLE_STUDENT_ERROR,
    payload: error,
  });

  export const postStudentLogin = (history, req) => ({
    type: POST_STUDENT_LOGIN,
    payload: {history, req}
  });
  
  export const postStudentLoginSuccess = (response) => ({
    type: POST_STUDENT_LOGIN_SUCCESS,
    payload: response,
  });
  
  export const postStudentLoginError = (error) => ({
    type: POST_STUDENT_LOGIN_ERROR,
    payload: error,
  });

  export const postStudentGroup = (history, req) => ({
    type: POST_STUDENT_GROUP,
    payload: {history, req}
  });
  
  export const postStudentGroupSuccess = (response) => ({
    type: POST_STUDENT_GROUP_SUCCESS,
    payload: response,
  });
  
  export const postStudentGroupError = (error) => ({
    type: POST_STUDENT_GROUP_ERROR,
    payload: error,
  });

  export const postNewStudent = (history, req) => ({
    type: POST_STUDENT,
    payload: {history, req}
  });
  
  export const postNewStudentSuccess = (response) => ({
    type: POST_STUDENT_SUCCESS,
    payload: response,
  });
  
  export const postNewStudentError = (error) => ({
    type: POST_STUDENT_ERROR,
    payload: error,
  });

  export const putNewStudent = (history, req) => ({
    type: PUT_STUDENT,
    payload: {history, req}
  });
  
  export const putNewStudentSuccess = (response) => ({
    type: PUT_STUDENT_SUCCESS,
    payload: response,
  });
  
  export const putNewStudentError = (error) => ({
    type: PUT_STUDENT_ERROR,
    payload: error,
  });
  