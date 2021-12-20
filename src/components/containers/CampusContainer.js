import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";

import { CampusView } from "../views";

function CampusContainer(props) {
  useEffect(() => {}, []);

  return <CampusView campus={props.campus} />;
}
