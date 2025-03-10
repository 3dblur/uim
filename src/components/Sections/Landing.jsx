import React from 'react';
import Button from '../UI/Button';

const Landing = () => {
  return (
    <section id="landing" className="section landing">
      <div className="landing-content">
        <h1 className="landing-title">UI/OS Marketplace</h1>
        <p className="landing-subtitle">
          Discover and purchase AI-generated user interfaces designed by leading UX engineers for fast deployment.
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