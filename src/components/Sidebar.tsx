import React, { useState } from 'react';
import '../styles/Sidebar.css';

interface MenuItem {
  icon: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { icon: '🗺️', text: 'MAP' },
  { icon: '📷', text: 'CAMERA' },
  { icon: '💬', text: 'CHAT' },
  { icon: '👥', text: 'USER' },
  { icon: '❓', text: 'FAQs' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<number | null>(0);

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
              onClick={() => setActiveItem(index)}
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
