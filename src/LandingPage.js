import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          {/* Left Column for Content */}
          <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
            <div className="landing-page-content text-center text-md-left">
              <h1>Welcome to Affinity</h1>
              <p>Your journey to finding your perfect match begins here.</p>
              <Link to="/dating">
                <button className="btn btn-primary">START NOW</button>
              </Link>
            </div>
          </div>
          {/* Right Column for Rotating Image */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <div className="image-container">
              <img
                src="white.png"
                alt="Horoscopes"
                className="horoscope-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
