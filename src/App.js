import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NewStudentContainer from "./components/containers/NewStudentContainer";
function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={NewStudentContainer} />
      </Switch>
    </div>
  );
}

export default App;
