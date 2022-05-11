import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import productSaga from "./product/saga";
import teacherSaga from "./teacher/saga"
import languagesSaga from "./lang/saga";
import subjectSaga from "./subject/saga";
import groupSaga from "./group/saga";
import studentSaga from "./student/saga";

export default function* rootSaga() {
  yield all([authSaga(), productSaga(), teacherSaga(), languagesSaga(), subjectSaga(), groupSaga(), studentSaga()]);
}
