import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { MenuItem, SidebarProps } from '../interfaces/Interface';
import { useAuth } from './AuthContext';

const menuItems: MenuItem[] = [
  { icon: '🗺️', text: 'MAP', path: '' },
  { icon: '📷', text: 'CAMERA', path: 'camera' },
  { icon: '💬', text: 'CHAT', path: 'cameras' },
  { icon: '👥', text: 'USER', path: 'cameras' },
  { icon: '❓', text: 'FAQs', path: 'cameras' },
];

function Sidebar({ isOpen }: SidebarProps) {
  const { user, logout } = useAuth();
  const [activeItem, setActiveItem] = useState<number | null>(0);
  const navigate = useNavigate();

  // Hàm xử lý logout
  const handleLogout = () => {
    localStorage.removeItem('token');  // Xóa token khỏi localStorage
    logout();
    navigate('/login');  // Chuyển hướng đến trang login
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed mini'}`}>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`sidebar-item ${activeItem === index ? 'active' : ''}`}
            onClick={() => { 
              setActiveItem(index);
              navigate('/' + item.path);
            }}
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="text" style={{ whiteSpace: 'nowrap' }}>{item.text}</span>}
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
