import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { HeaderProps } from '../interfaces/Interface';

function Header({isOpen, toggleSidebar}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <div style={{display: 'flex'}}>
          <img src="/images/logo.svg" alt="CamSphere Logo" className="logo" />
          <h1 className="brand">HaNoiCam</h1>
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
        <img
          src={'/images/close-sidebar-icon.svg'}
          alt="Toggle Icon"
          className={`toggle-icon ${isOpen ? '' : 'flipped'}`} 
        />
      </button>
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
