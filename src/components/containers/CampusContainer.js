import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";

import { CampusView } from "../views";

function CampusContainer(props) {
  useEffect(() => {}, []);

  return <CampusView campus={props.campus} />;
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
