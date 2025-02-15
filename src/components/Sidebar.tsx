import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { MenuItem, SidebarProps } from '../interfaces/Interface';
import { useAuth } from './AuthContext';
import { Role } from '../utils/enum';

const menuItems: MenuItem[] = [
  { icon: '🗺️', text: 'MAP', path: '' },
  { icon: '📷', text: 'CAMERA', path: 'camera' },
  { icon: '🖼️', text: 'VSM', path: 'vsm' },
  { icon: '🔴', text: 'RECORD', path: 'record' },
  { icon: '👥', text: 'USER', path: 'user' },
  { icon: '❓', text: 'FAQs', path: 'faqs' },
];

function Sidebar({ isOpen }: SidebarProps) {
  const { user, logout } = useAuth();
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed mini'}`}>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          index === 4 && user?.role !== Role.ADMIN ? 
          <></> :
          <li
            key={index}
            className={`sidebar-item ${activeItem === index ? 'active' : ''}`}
            onClick={() => { 
              setActiveItem(index);
              navigate('/' + item.path);
            }}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="text" style={{ whiteSpace: 'nowrap' }}>{ item.text }</span>}
          </li>
        ))}
      </ul>

      { user ? 
        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div> : <></>
      }
    </div>
  );
};

export default Sidebar;
