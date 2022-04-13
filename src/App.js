import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Body from "./components/Body/Body";

function App() {
  return (
    <Router>
      <Navbar/>
      <Body/>
    </Router>
  );
}

export default App;
