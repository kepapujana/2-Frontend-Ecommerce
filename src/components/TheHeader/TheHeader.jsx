import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TheHeader.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const TheHeader = () => {
  const navigate = useNavigate();
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

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
            <Link to="/products" className="nav-menu-link">
              Products
            </Link>
          </li>
          {token ? (
            <>
              <li className="nav-menu-item">
                <Link to="/profile" className="nav-menu-link">
                  Profile
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/logout" onClick={logoutUser} className="nav-menu-link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-menu-item">
              <Link to="/login" className="nav-menu-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default TheHeader;
