import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  NewStudentContainer,
  HomeViewContainer,
} from "./components/containers";
function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <Routes>
        <Route path="/newstudent" element={<NewStudentContainer />} />
        <Route path="/" element={<HomeViewContainer />} />
      </Routes>
    </div>
  );
}

export default App;
