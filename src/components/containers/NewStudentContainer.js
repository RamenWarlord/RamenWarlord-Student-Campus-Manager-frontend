import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { addStudentThunk } from "../../store/thunks";
import NewStudentView from "../views/NewStudentView";
/*
function NewStudentContainer(props) {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    campusId: null,
    redirect: false,
    redirectId: null,
  });

  //returning functions in useEffect acts as a cleanup/ component will unmount
  useEffect(() => {
    return function cleanup() {
      setState({ ...state, redirect: false, redirectId: null });
    };
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let student = {
      firstname: state.firstname,
      lastname: state.lastname,
      campusId: state.campusId,
    };
    let newStudent = await props.addStudent(student);
    setState({
      firstname: "",
      lastname: "",
      campusId: null,
      redirect: true,
      redirectId: newStudent.id,
    });
  };

  if (state.redirect) {
    return <Navigate replace to={`/student/${state.redirectId}`} />;
  }
  return (
    <NewStudentView handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}
*/
function NewStudentContainer(props) {
  return <div>hi</div>;
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

export default connect(null, mapDispatch)(NewStudentContainer);
