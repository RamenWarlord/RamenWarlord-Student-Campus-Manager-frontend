import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";
import { useParams } from "react-router-dom";

import { CampusView } from "../views";

function CampusContainer(props) {
  //getting campus ID from url
  const propParams = useParams();
  useEffect(() => {
    props.fetchCampus(propParams.id);
  }, []);
  console.log(props);
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
