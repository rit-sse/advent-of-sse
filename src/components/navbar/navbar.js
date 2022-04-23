import React from 'react';
import {  Link } from "react-router-dom";
import './navbar.css';
// import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    return (
    <div id='nav-list'>
      {/* <div onClick={() => handleClick()}> */}
        <img src='../images/sse.jpg'/>
      {/* </div>   */}
      
      <div id='question-block'>
        <a>
            <Link to="/">Home</Link>
        </a>
        <a>
            <Link to="/one">Q1</Link>
        </a>
        <a>
            <Link to="/two">Q2</Link>
        </a>
        <a>
            <Link to="/three">Q3</Link>
        </a>
        <a>
            <Link to="/four">Q4</Link>
        </a>
      </div>
    </div>
    );
}

export default Navbar;