import { connect } from "react-redux";
import { useEffect } from "react";

import { fetchAllStudentsThunk, deleteStudentThunk } from "../../store/thunks";
import { StudentsListView } from "../views";

function StudentsListContainer(props) {
  useEffect(() => {
    props.fetchAllStudents();
  }, []);

  return (
    <div>
      <StudentsListView
        students={props.allStudents}
        deleteStudent={props.deleteStudent}
      />
    </div>
  );
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};

export default connect(mapState, mapDispatch)(StudentsListContainer);
