import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { productReducer } from "./product/reducer";
import { teacherReducer } from "./teacher/reducer";
import {languageReducer} from "./lang/reducer";
import { subjectReducer } from "./subject/reducer";
import { groupReducer } from "./group/reducer";
import { studentReducer } from "./student/reducer";

export const rootReducer = combineReducers({
  //  reducer
  authReducer,
  productReducer,
  teacherReducer,
  languageReducer,
  subjectReducer,
  groupReducer,
  studentReducer
});
