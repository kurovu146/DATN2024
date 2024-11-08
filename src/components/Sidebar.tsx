import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { MenuItem, SidebarProps } from '../interfaces/Interface';

const menuItems: MenuItem[] = [
  { icon: '🗺️', text: 'MAP' , path: '' },
  { icon: '📷', text: 'CAMERA' , path: 'camera' },
  { icon: '💬', text: 'CHAT' , path: 'cameras' },
  { icon: '👥', text: 'USER' , path: 'cameras' },
  { icon: '❓', text: 'FAQs' , path: 'cameras' },
];

function Sidebar({isOpen}: SidebarProps) {
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
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
