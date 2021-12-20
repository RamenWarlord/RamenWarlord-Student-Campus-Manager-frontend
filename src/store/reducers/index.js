import { combineReducers } from "redux";

import studentReducer from "./studentReducer";
import allStudentsReducer from "./allStudentsReducer";
import allCampusesReducer from "./allCampusesReducer";
import campusReducer from "./campusReducer";

export default combineReducers({
  student: studentReducer,
  allStudents: allStudentsReducer,
  campus: campusReducer,
  allCampuses: allCampusesReducer,
});
