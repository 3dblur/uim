import React from 'react';
import Button from '../UI/Button';
import backgroundImage from '../../Asset/background.png'; 

const Landing = () => {
  return (
    <section id="landing" className="section landing">
       <div className="logo-container">
        <img src="/loog.png" alt="UI/OS Logo" className="logo" />
      </div>
      <div className="landing-content">
        <h1 className="landing-title">Find The Best UI <p> Ship The Best UX </p></h1>
        <p className="landing-subtitle">
          Discover and purchase scalable user interfaces designed by leading UX engineers with scalable AI development for fast deployment.
        </p>
        <div className="landing-buttons">
          <Button>Explore</Button>
          <Button primary>Sign Up</Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;