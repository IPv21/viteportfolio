import React from "react";
import { useNavigate } from "react-router-dom";
import '/src/index.css'

export default function TheCall() {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  } 

    return (
        <div className="callpage">
            <h1>The Call...</h1>
          <div className="call">
            <p>I bring with me a unique skill set that gives me a competitive edge as I have a lifetime of experience in customer service, team work and team building, and a drive for excellence matched by none. Don't miss this opportunity to add a star to your team.</p>
 
            <p>.</p>
            <p id="phnum">215-254-0810</p>
            <p>.</p>
            <p id="phnum">MatthewShuman@MyYahoo.com</p>
          </div>
          <div className="buttons-container">
        <button className="button" onClick={goToHome}>Home</button>
    </div>
        </div>
    );
}

