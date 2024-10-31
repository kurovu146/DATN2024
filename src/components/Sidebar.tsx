import React, { useState } from 'react';
import '../styles/Sidebar.css';

interface MenuItem {
  icon: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { icon: '🗺️', text: 'MAP' },
  { icon: '🤖', text: 'BOTS' },
  { icon: '💬', text: 'チャネル' },
  { icon: '👥', text: 'グループ' },
  { icon: '❓', text: 'FAQs' },
  { icon: '>_', text: 'API' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <img src="/images/logo.svg" alt="MIRA Bot Logo" className="logo" />
        {isOpen && <h1 className="sidebar-title">MIRA BOT</h1>}
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
            {isOpen && <span className="text">{item.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
