import React, { useState } from "react";

function NewStudentContainer() {
  const [firstname, setfname] = useState("");
  const [lastname, setlname] = useState("");
  const [campusId, setcid] = useState(null);
  const [redirect, isRedirect] = useState(false);
  const [redirectId, setrid] = useState(null);

  return <div></div>;
}

export default NewStudentContainer;
