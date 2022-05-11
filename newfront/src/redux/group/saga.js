import { all, takeEvery, call, put, fork } from "@redux-saga/core/effects";
import {GET_GROUPS, GET_SINGLE_GROUP, DELETE_GROUP, POST_GROUP, PUT_GROUP, GET_GROUPS_TEACHER} from "../actions";
import {fetchGetGroupsList, fetchGetSingleGroups, fetchPostGroup, fetchPutGroup, fetchDeleteGroup, fetchGetGroupsTeacherList } from "../services/api";
import { notificationMessage } from "../services/notificationMessage";
import {getGroupsError, getGroupsSuccess, getSingleGroupError, getSingleGroupSuccess, postGroupError, postGroupSuccess, putGroupError, putGroupSuccess, deleteGroupError, deleteGroupSuccess, getGroupsTeacherSuccess, getGroupsTeacherError} from "./actions";

function* watchGetGroups() {
  yield takeEvery(GET_GROUPS, workGetGroups);
}

function* workGetGroups({payload}) {

  const { response, error } = yield call(fetchGetGroupsList, payload);

  if (response) {
    console.log(response);
    yield put(getGroupsSuccess(response.data));
  } else {
    yield put(getGroupsError(error.response.data));
    notificationMessage("error", error.response.data);
  }
}



function* watchGetGroupsTeacher() {
  yield takeEvery(GET_GROUPS_TEACHER, workGetGroupsTeacher);
}

function* workGetGroupsTeacher() {

  const { response, error } = yield call(fetchGetGroupsTeacherList);

  if (response) {
    yield put(getGroupsTeacherSuccess(response.data));
  } else {
    yield put(getGroupsTeacherError(error.response.data));
    notificationMessage("error", error.response.data);
  }
}

function* watchGetSingleGroups() {
  yield takeEvery(GET_SINGLE_GROUP, workGetSingleGroups);
}

function* workGetSingleGroups({id}) {
  console.log(id);
  const { response, error } = yield call(fetchGetSingleGroups, id);

  if (response) {
    console.log(response);
    yield put(getSingleGroupSuccess(response.data));
  } else {
    yield put(getSingleGroupError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

function* watchPostGroup() {
  yield takeEvery(POST_GROUP, workPostGroups);
}

function* workPostGroups({payload}) {
const {history, req} = payload;

  const { response, error } = yield call(fetchPostGroup, req);

  if (response) {
    console.log(response);
    yield put(postGroupSuccess(response.data));
  } else {
    yield put(postGroupError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}

function* watchPutGroup() {
  yield takeEvery(PUT_GROUP, workPutGroups);
}

function* workPutGroups({payload}) {
const {history, req} =payload;

  const { response, error } = yield call(fetchPutGroup, req);

  if (response) {
    yield put(putGroupSuccess(response.data));
  } else {
    yield put(putGroupError(error.response.data.message));
    notificationMessage("error", error.response.data.message);
  }
}


function* watchDeleteGroups() {
  yield takeEvery(DELETE_GROUP, workDeleteGroups);
}

function* workDeleteGroups({id}) {

  console.log(id);

  const { response, error } = yield call(fetchDeleteGroup, id);

  if (response) {
    yield put(deleteGroupSuccess(response.data));
    notificationMessage("success", "SUCCESS");
  } else {
    yield put(deleteGroupError(error.response.data));
    notificationMessage("error", error.response.data);
  }
}

export default function* groupSaga() {
  yield all([
    fork(watchDeleteGroups),
    fork(watchGetGroupsTeacher),
    fork(watchPutGroup),
    fork(watchPostGroup),
    fork(watchGetSingleGroups),
    fork(watchGetGroups)
  ]);
}
