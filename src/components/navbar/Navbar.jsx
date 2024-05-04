import React, { useEffect } from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/Link-logo.png";
import { IoSearchOutline } from "react-icons/io5";
import location from "../../assets/location.svg";
import compare from "../../assets/compare.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            {/* <div className="name">
              <h2>Nest</h2>
              <h3>MART & GLOCARY</h3>
            </div> */}
          </div>
          <div className="inputs">
            <select name="categories">
              <option value="All Categories">All Categories</option>
              <option value="Fruits">Fruits</option>
              <option value="Limonades">Limonades</option>
            </select>
            <input type="text" placeholder="Search for items..." />
            <IoSearchOutline />
          </div>
          <div className="location">
            <img src={location} alt="location" />
            <select name="location">
              <option value="Your Location">Your Location</option>
              <option value="Our Location">Our Location</option>
            </select>
          </div>
          <div className="nav_icons">
            <div className="nav_icon">
              <img src={compare} alt="icon" />
              <span>3</span>
              <p>Compare</p>
            </div>
            <div className="nav_icon">
              <img src={heart} alt="icon" />
              <span>6</span>
              <p>Wishlist</p>
            </div>
            <div className="nav_icon">
              <img src={cart} alt="icon" />
              <span>2</span>
              <p>Wishlist</p>
            </div>
            <div className="nav_icon">
              <img src={user} alt="icon" />
              <p>Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
