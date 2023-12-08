import React from 'react';
import { Link } from 'react-router-dom';
import '/src/index.css'

function Landing() {
    function manClick () {
        console.log("manClick");
        window.location.href = "/man";
        }
    function workClick () {
        console.log("workClick");
        window.location.href = "/work";
        }
    function callClick () {
        console.log("callClick");
        window.location.href = "/call";
        }

    return (
        <>
        <div class='landing'>

        <div className='intro'>
    <h1>Matthew Shuman</h1>
    <img src="src/images/cover.jpg" alt="Matthew Shuman" height='250px' width='220px'/>
    <p  id="devs"><span id="soo" className="brace">{'{'}</span><span className="web">web</span><span className="developer">Developer</span><span className="brace">{'}'}</span><span className='web'>;</span></p>
</div>

            <div id="themanlanding" onClick={manClick} class='man'>
                <h2>The Man...</h2>
            </div>
            <div id="theworkslanding" onClick={workClick} class='man'>
                <h2>The Works...</h2>
            </div>
            <div id="thecalllanding" onclick={callClick} class='man'>
                <h2>The Call...</h2>
            </div>
        </div>
        </>
    );
}


export default Landing;