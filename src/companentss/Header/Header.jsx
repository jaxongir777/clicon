import React from "react";
import { Link } from "react-router-dom"; // React Router Link
import "./Header.css";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import logo from './header.images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          
          {/* Logo bosilganda bosh sahifaga o'tadi */}
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <form className="search-form">
            <input type="text" placeholder="Search for anything..." />
          </form>

          <ul className="header-list">
            <li className="header-item">
              {/* Savatcha ikonkasiga bosilganda /shop sahifaga o'tadi */}
              <Link to="/shop"><FaShoppingCart /></Link>
            </li>

            <li className="header-item">
              <Link to="/Like"><FaHeart /></Link>
            </li>

            <li className="header-item">
              <Link to="#"><FaUser /></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;