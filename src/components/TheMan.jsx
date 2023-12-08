import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/index.css';


export default function TheMan() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  const goToWork = () => {  
    navigate('/work');
  };

  return (
    <div className="manpage">
      <h1>The Man...</h1>
      <div className="moreman">
        <p>
          Hello! My name is Matthew Shuman. Thank you for taking some time out
          of your day to view my page. Born in California, raised in Lancaster,
          I came to Philly after Covid. I'm a lifelong cook, having done
          everything from flipping eggs at Cracker Barrel to being Sous Chef at
          a 5 Star restaurant. Looking for a new career path, I decided to
          pursue my love of computers and began researching IT courses on
          different platforms. I then found the UPenn LPS Coding Bootcamp and
          decided to take the plunge. I'm excited to see where this new path
          takes me!
        </p>
        <img
          src="/images/lookleft.jpg"
          alt="Matthew Shuman"
          height="90%"
          width="200px"
        />
      </div>
      <div className="moreman">
        <img
          id="marathon"
          src="/images/marathon.jpg"
          alt="Matthew Shuman"
          height="250px"
          width="200px"
        />
        A dedicated team member with a passion for learning, I'm looking for a
        company that will allow me to learn and grow as a developer. An avid
        runner, I have completed several half marathons and one full marathon.
        The mental toughness and dedication required to complete a marathon is
        something I bring to every aspect of my life. I'm looking forward to
        bringing that same dedication to my new career.
      </div>
      <div className="evenmoreman center-horizontal">
        <img
          id="resume"
          src="/images/1.png"
          alt="Resume Page 1"
          height="800px"
          width="600px"
        />
        <img
          id="resume"
          src="/images/2.png"
          alt="Resume Page 2"
          height="800px"
          width="600px"
        />
      </div>

      <div className="buttons-container">
        <button className="button" onClick={goToHome}>Home</button>
        <button className="button" onClick={goToWork}>The Works...</button>
    </div>
      
    </div>
  );
}
