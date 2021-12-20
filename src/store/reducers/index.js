import { combineReducers } from "redux";

import studentReducer from "./studentReducer";
import allStudentsReducer from "./allStudentsReducer";

export default combineReducers({
  student: studentReducer,
  allStudents: allStudentsReducer,
});
