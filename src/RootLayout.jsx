import { Link, Outlet } from "react-router-dom";
import React from "react";

const RootLayout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link
          className="navbar-brand"
          to="/LandingPage"
          style={{ marginLeft: "4vw" }}
        >
          Affinity
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/LandingPage"
                style={{ marginLeft: "2vw" }}
              >
                Landing Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/dating"
                style={{ marginLeft: "2vw" }}
              >
                Affinity
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Horoscope"
                style={{ marginLeft: "2vw" }}
              >
                Horoscope Page
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default RootLayout;
