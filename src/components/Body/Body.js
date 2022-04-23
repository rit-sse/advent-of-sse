import React from 'react';
import {  Link } from "react-router-dom";
import './Body.css';

const Body = () =>{
    return (
    <div>
        <h1>Welcome To Imagine RIT!</h1>
        <div className='home-text'>
            <p>This is the RIT Society of Softare Engineer's Advent of Code.</p>
            <p>If you've always wanted to try software Engineering but never knew where to start, you're in luck!
                We'll help you out. Right here, we'll walk you through setting up a coding enviornment, along with a few
                practice problems to get your feet wet.
            </p>
        </div>
        <div className='steps'>
            <h2>Directions</h2>
            <ol>
                <li>Go to the <a id='vscodelink' href='https://code.visualstudio.com/'>VS Code Website</a> and just click recommended settings for installing the software</li>
                <li>Once Vs Code is installed, run it.</li>
                <li>Click on the extensions tab. (Image shown below) <br/><img className="step-img" width="70px" src='../images/step3.jpeg'/></li>
                <li>Search and Download The Code Runner Extension <br/> <img className="step-img" width='300px' src='../images/step4_1.jpeg'/> <br/> <img  className='step-img' src='../images/step4_2.jpeg' width="500px" /> </li>
                <li>Now go back to the home screen, and start a new file <br/> <img className="step-img" width="70px" src='../images/step5_1.jpeg'/> <br/> <img  className='step-img' src='../images/step5_2.jpeg' width="500px" /> </li>
                <li>Call this file example.py</li>
            </ol>
        </div>
        <div className='steps'>
            <h2>Examples</h2>
            <ol>
                <li>Here is an example of a Python function, Running this will print "Hello World" to your console <br/> <img className="step-img" src='../images/step7_1.jpeg' /></li>
                <li>Click run on the top right, and click run python file <br/> <img className="step-img" src='../images/step8_1.jpeg' /></li>
                <li>This should be your result <br/> <img className="step-img" src='../images/step9_1.jpeg' /></li>
            </ol>
        </div>
    </div>
    );
}

export default Body;