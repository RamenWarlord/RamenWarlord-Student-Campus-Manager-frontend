import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import {} from "../../store/thunks";
import { CampusListView } from "../views";

function CampusListContainer(props) {}

const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

CampusListContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(CampusListContainer);
