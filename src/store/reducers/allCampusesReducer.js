import * as at from "../actions/actionTypes";

// REDUCER;
const allCampusesReducer = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_CAMPUSES:
      return action.payload;
    default:
      return state;
  }
};

export default allCampusesReducer;
