import * as ac from "./actions/actionCreators";
import axios from "axios";

export const addStudentThunk = (student) => async (dispatch) => {
  console.log(student);
  try {
    let res = await axios.post(`http://localhost:5000/api/students`, student);
    dispatch(ac.addStudent(res.data));
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
