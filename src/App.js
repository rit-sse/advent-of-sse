import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Body from "./components/Body/Body";
import Dogs from "./pages/Dogs"
import Main from "./components/Main/Main"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dogs" element={<Dogs/>} />
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

