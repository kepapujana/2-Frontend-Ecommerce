import React from 'react';
import { Link } from 'react-router-dom';
import './TheHeader.styles.scss';

const TheHeader = () => {
  return (
    <>
      <nav>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-menu-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/login" className="nav-menu-link">
              Login
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/profile" className="nav-menu-link">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TheHeader;
