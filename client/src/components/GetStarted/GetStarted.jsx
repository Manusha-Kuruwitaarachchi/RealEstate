import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <a href="mailto:manushaavinda@gmail.com" className="button">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
