import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CampusListView = (props) => {
  if (!props.allCampuses.length) {
    return <div>No campuses</div>;
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

CampusListView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default CampusListView;
