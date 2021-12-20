import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>
      <Link to={"/campuses"}>
        <button>All Campuses</button>
      </Link>

      <Link to={"/students"}>
        <button>All Students</button>
      </Link>
    </div>
  );
};

export default HomeView;
