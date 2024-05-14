import React, { useState , Component} from 'react';
import './DatingApp.css'; // Import CSS file
import DatingApp from "./DatingApp";
import LandingPage from './LandingPage';
import Horoscope from './Horoscope';
import { BrowserRouter as Router, Link, Route, Routes, RouteElement } from 'react-router-dom';
import RootLayout from "./RootLayout";
import { render } from '@testing-library/react';


const App = () => {
  

  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<RootLayout/>}>
                <Route path="/LandingPage" element={<LandingPage/>}/>
                <Route path="Horoscope" element={<Horoscope/>}/>
                <Route path="Dating" element={<DatingApp />} />
            </Route>
          </Routes>
        </Router>
      </>

     
  );
};

export default App;
