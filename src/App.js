import "./App.css";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  NewStudentContainer,
  HomeViewContainer,
  CampusListContainer,
  CampusContainer,
  StudentsListContainer,
} from "./components/containers";
function App() {
  //const state = useSelector((state) => state);

  return (
    <div className="App">
      <Routes>
        <Route path="/newstudent" element={<NewStudentContainer />} />
        <Route path="/" element={<HomeViewContainer />} />
        <Route path="/campuses" element={<CampusListContainer />} />
        <Route path="/campus/:id" element={<CampusContainer />} />
        <Route path="/students" element={<StudentsListContainer />} />
      </Routes>
    </div>
  );
}

export default App;
