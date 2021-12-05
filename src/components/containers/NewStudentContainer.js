import React, { useEffect, useState } from "react";

function NewStudentContainer(props) {
  const [firstname, setfname] = useState("");
  const [lastname, setlname] = useState("");
  const [campusId, setcid] = useState(null);
  const [redirect, isRedirect] = useState(false);
  const [redirectId, setrid] = useState(null);

  //returning functions as a cleanup/ component will unmount
  useEffect(() => {
    return function cleanup() {
      isRedirect(false);
      setrid(null);
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let student = {
      firstname: firstname,
      lastname: lastname,
      campusId: campusId,
    };
    let newStudent = await props.addStudent(student);
    setfname("");
    setlname("");
    setcid(null);
    isRedirect(true);
    setrid(newStudent.id);
  };

  return <div></div>;
}

export default NewStudentContainer;
