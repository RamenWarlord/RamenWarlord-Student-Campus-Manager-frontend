import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);

  return <div className="App"></div>;
}

export default App;
