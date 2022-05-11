import { all, takeEvery, call, put, fork } from "@redux-saga/core/effects";
import { GET_SUBJECTS, GET_SINGLE_SUBJECT, POST_SUBJECT, PUT_SUBJECT, DELETE_SUBJECT} from "../actions";
import {fetchGetSubjectsList, fetchGetSingleSubjectsList, fetchPostSubject, fetchPutSubject, fetchDeleteSubject} from "../services/api";
import { notificationMessage } from "../services/notificationMessage";
import {getSingleSubjectError, getSingleSubjectSuccess, getSubjectsError, getSubjectsSuccess, postSubjectError, postSubjectSuccess, putSubjectError, putSubjectSuccess, deleteSubjectSuccess, deleteSubjectError} from "./actions";

function* watchGetSubjects() {
  yield takeEvery(GET_SUBJECTS, workGetSubjects);
}

function* workGetSubjects() {
  const { response, error } = yield call(fetchGetSubjectsList);

  if (response) {
    console.log(response);
    yield put(getSubjectsSuccess(response.data));
  } else {
    yield put(getSubjectsError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

function* watchGetSingleSubjects() {
  yield takeEvery(GET_SINGLE_SUBJECT, workGetSingleSubjects);
}

function* workGetSingleSubjects({id}) {
  console.log(id);
  const { response, error } = yield call(fetchGetSingleSubjectsList, id);

  if (response) {
    console.log(response);
    yield put(getSingleSubjectSuccess(response.data));
  } else {
    yield put(getSingleSubjectError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

function* watchPostSubjects() {
  yield takeEvery(POST_SUBJECT, workPostSubjects);
}

function* workPostSubjects({payload}) {
const {history, req} = payload;
console.log(req);

  const { response, error } = yield call(fetchPostSubject, req);

  if (response) {
    console.log(response);
    yield put(postSubjectSuccess(response.data));
  } else {
    yield put(postSubjectError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

function* watchPutSubjects() {
  yield takeEvery(PUT_SUBJECT, workPutSubjects);
}

function* workPutSubjects({payload}) {
const {history, req} =payload;

  const { response, error } = yield call(fetchPutSubject, req);

  if (response) {
    console.log(response);
    yield put(putSubjectSuccess(response.data));
  } else {
    yield put(putSubjectError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}


function* watchDeleteSubjects() {
  yield takeEvery(DELETE_SUBJECT, workDeleteSubjects);
}

function* workDeleteSubjects({id}) {

  const { response, error } = yield call(fetchDeleteSubject, id);

  if (response) {
    yield put(deleteSubjectSuccess(response.data));
    notificationMessage("success", "SUCCESS");
  } else {
    yield put(deleteSubjectError(error.response.data));
    notificationMessage("error", error.response.data);
  }
}

export default function* subjectSaga() {
  yield all([
    fork(watchGetSubjects),
    fork(watchPutSubjects),
    fork(watchPostSubjects),
    fork(watchDeleteSubjects),
    fork(watchGetSingleSubjects)
  ]);
}
