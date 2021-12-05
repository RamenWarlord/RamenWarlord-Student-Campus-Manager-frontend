const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label style={{ color: "#11153e", fontWeight: "bold" }}>
          First Name:{" "}
        </label>
        <input type="text" name="firstname" onChange={(e) => handleChange(e)} />{" "}
        <br />
        <label style={{ color: "#11153e", fontWeight: "bold" }}>
          Last Name:{" "}
        </label>
        <input type="text" name="lastname" onChange={(e) => handleChange(e)} />{" "}
        <br />
        <label style={{ color: "#11153e", fontWeight: "bold" }}>
          campusId:{" "}
        </label>
        <input type="text" name="campusId" onChange={(e) => handleChange(e)} />{" "}
        <br />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default NewStudentView;
