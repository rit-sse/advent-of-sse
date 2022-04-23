import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Body from "./components/Body/Body";
import Dogs from "./pages/Dogs"
import One from './pages/One';
import Main from "./components/Main/Main"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dogs" element={<Dogs/>} />
        <Route path="/one" element={<One/>} />
        {/* <Route path="/two" element={<Two/>} />
        <Route path="/three" element={<Three/>} />
        <Route path="/four" element={<Four/>} /> */}
        <Route path="*" element={<div>No page found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

export default App;

