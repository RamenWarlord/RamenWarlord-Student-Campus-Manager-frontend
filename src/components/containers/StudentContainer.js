import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

function StudentContainer(props) {
  const propParams = useParams();
  useEffect(() => {
    props.fetchStudent(propParams.id);
  }, []);
  console.log(props);
  return <StudentView student={props.student} />;
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
