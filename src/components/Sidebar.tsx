import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';

interface MenuItem {
  icon: string;
  text: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { icon: '🗺️', text: 'MAP' , path: '' },
  { icon: '📷', text: 'CAMERA' , path: 'camera' },
  { icon: '💬', text: 'CHAT' , path: 'cameras' },
  { icon: '👥', text: 'USER' , path: 'cameras' },
  { icon: '❓', text: 'FAQs' , path: 'cameras' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <img src="/images/logo.svg" alt="MIRA Bot Logo" className="logo" />
        <button className="toggle-button" onClick={toggleSidebar}>
        <img
          src={'/images/close-sidebar-icon.svg'}
          alt="Toggle Icon"
          className={`toggle-icon ${isOpen ? '' : 'flipped'}`} 
        />
      </button>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} 
              className={`sidebar-item ${activeItem === index ? 'active' : ''}`}
              onClick={() => {setActiveItem(index); navigate('/' + item.path);}}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="text" style={{whiteSpace: 'nowrap'}}>{item.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
