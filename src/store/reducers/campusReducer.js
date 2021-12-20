import { FETCH_CAMPUS } from "../actions/actionTypes";

const initialState = {
  students: [],
};

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default campusReducer;
