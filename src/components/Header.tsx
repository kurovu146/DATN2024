import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/images/logo.svg" alt="CamSphere Logo" className="logo" />
        <h1 className="brand">HaNoiCam</h1>
      </div>
      <div style={{display: 'flex', gap: 20}}>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/live-cameras" className="nav-link">Live Cameras</Link>
          <Link to="/join-us" className="nav-link">Join Us</Link>
          <Link to="/live-cams" className="nav-link">Live Cams</Link>
        </nav>
        <div className="header-right">
          <button className="signup-button">Sign up</button>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
