import React from 'react';
import {  Link } from "react-router-dom";
import './navbar.css';

const Navbar = () =>{
    return (
    <div id='nav-list'>
      <img src='../images/sse.jpg' onClick=""/>
      <div id='question-block'>
        <a>
            <Link to="/">Q1</Link>
        </a>
        <a>
            <Link to="/">Q2</Link>
        </a>
        <a>
            <Link to="/">Q3</Link>
        </a>
        <a>
            <Link to="/">Q4</Link>
        </a>
      </div>
    </div>
    );
}

export default Navbar;