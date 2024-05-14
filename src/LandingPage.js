import React from 'react';
import { Link } from 'react-router-dom';
import './DatingApp.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Left Column for Content */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="landing-page-content">
              <h1 className="text-left">Welcome to Affinity</h1>
              <p className="text-left">Your journey to finding your <br></br> perfect match begins here.</p>
              <Link to="/dating" className="d-flex justify-content-center">
                <button className="btn btn-primary text-left">START NOW</button>
              </Link>
            </div>
          </div>
          {/* Right Column for Rotating Image */}
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <img src="white.png" alt="Horoscopes" className="horoscope-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
