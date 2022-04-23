import React from 'react';
import Navbar from '../components/navbar/navbar';
import "../App.css"
import Answer from '../components/Answer/Answer';

const One = () =>{
  return (
    <div>
      <Navbar />
      <h1>Question 1</h1>
      <div className='home-text'>
        <p>Since this is your first question. Let's start easy. Make a function that finds a number x which is a to the power of b. </p>
      </div>

      <div className='steps'>
          <h2>Requirements</h2>
          <ul>
              <li>Must take 2 Parameters</li>
              <li>Must return an integer</li>
          </ul>
      </div>

      <div className='steps'>
          <h2>Hints</h2>
          <p>Here are some reference links to answer the questions, highly recommended to go over them</p>
          <ul>
              <li> <a href='https://www.w3schools.com/python/python_functions.asp'> W3school guide for functions & parameters</a></li>
              <li> <a href='https://www.w3schools.com/python/ref_math_pow.asp'> W3school guide for Math/Power operations</a></li>
          </ul>
      </div>

      <Answer />
    </div>
  );
}
export default One;