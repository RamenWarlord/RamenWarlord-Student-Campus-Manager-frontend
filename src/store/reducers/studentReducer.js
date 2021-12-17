import { FETCH_STUDENT } from "../actions/actionTypes";

const initialState = {
  campus: {},
};

// REDUCER;
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

export default studentReducer;
