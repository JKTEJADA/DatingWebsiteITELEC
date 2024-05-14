import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img className = "logo" src='/logo.png'></img>
      <h1>Welcome to Affinity</h1>
      <p>Your journey to finding your perfect match begins here.</p>
    </div>
  );
};

export default LandingPage;