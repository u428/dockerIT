import { all, takeEvery, call, put, fork } from "@redux-saga/core/effects";
import { GET_TEACHERS, POST_TEACHERS, GET_SINGLE_TEACHER, DELETE_TEACHER, PUT_TEACHERS } from "../actions";
import { fetchGetTeachersList, fetchPostTeacher, fetchPutTeacher, fetchGetSingleTeacher, fetchDeleteTeacher } from "../services/api";
import { notificationMessage } from "../services/notificationMessage";
import { getTeachersError, getTeachersSuccess, postTeachersError, putTeachersSuccess, putTeachersError, getSingleTeacherSuccess, getSingleTeacherError, deleteTeacherSuccess, deleteTeacherError } from "./actions";

function* watchGetTeachers() {
  yield takeEvery(GET_TEACHERS, workGetTeachers);
}

function* workGetTeachers(req) {

  const {payload} = req;
  console.log(payload);

  const { response, error } = yield call(fetchGetTeachersList, payload);

  if (response) {
    console.log(response);
    yield put(getTeachersSuccess(response.data));
  } else {
    yield put(getTeachersError(error.response.data.message));
    notificationMessage("error", "Could not Refresh");
  }
}


function* watchGetSingleTeacher() {
  yield takeEvery(GET_SINGLE_TEACHER, workGetSingleTeacher);
}

function* workGetSingleTeacher({id}) {

  console.log(id);

  const { response, error } = yield call(fetchGetSingleTeacher, id);
  console.log(response);
  if (response) {
    yield put(getSingleTeacherSuccess(response.data.teacher));
  } else {
    yield put(getSingleTeacherError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

function* watchDeleteTeacher() {
  yield takeEvery(DELETE_TEACHER, workDeleteTeacher);
}

function* workDeleteTeacher({id}) {
  console.log(id);
  const { response, error } = yield call(fetchDeleteTeacher, id);
  console.log(response);
  if (response) {
    console.log(response);
    yield put(deleteTeacherSuccess(response.data.teachers));
  } else {
    console.log(error);
    yield put(deleteTeacherError(error.response.data.message));
    notificationMessage("error", "SORRY: there is some ERRORS");
  }
}

function* watchPostTeachers() {
  yield takeEvery(POST_TEACHERS, workPostTeachers);
}

function* workPostTeachers({payload}) {
 const {history, req} = payload;
 console.log(payload);
 console.log(req);

  const { response, error } = yield call(fetchPostTeacher, req);

  if (response) {
    // yield put(postTeachersSuccess(response));
    notificationMessage("success", "Teacher qoshildi");
  } else {
    yield put(postTeachersError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}


function* watchPutTeachers() {
  yield takeEvery(PUT_TEACHERS, workPutTeachers);
}

function* workPutTeachers({payload}) {
 const {history, req} = payload;
 console.log(payload);
 console.log(req);

  const { response, error } = yield call(fetchPutTeacher, req);

  if (response) {
    yield put(putTeachersSuccess(response));
    notificationMessage("success", "Teacher omadli ozgartirildi");
  } else {
    yield put(putTeachersError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

export default function* teacherSaga() {
  yield all([
    fork(watchGetTeachers),
    fork(watchPutTeachers),
    fork(watchDeleteTeacher),
    fork(watchGetSingleTeacher),
    fork(watchPostTeachers)
  ]);
}
