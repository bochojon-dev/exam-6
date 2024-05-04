import React from "react";
import "../header-bottom/HeaderBottom.css";
import browse from "../../assets/browse.svg";
import fire from "../../assets/fire.svg";
import headphone from "../../assets/headphone.svg";
import { NavLink } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <div className="container">
        <div className="headerBottom_contents">
          <div className="left_items">
            <div className="categories">
              <img src={browse} alt="browse" />
              <select name="category">
                <option value="all">Browse Al Categories</option>
              </select>
            </div>
            <ul>
              <li>
                <img src={fire} alt="fire" />
                <p>Deals</p>
              </li>
              <li>
                <select name="home">
                  <option value="home">
                    {/* <NavLink to={"/"}>Home</NavLink> */}
                    Home
                  </option>
                  <option value="about">
                    {/* <NavLink to={"/about"}>About</NavLink> */}
                    About
                  </option>
                  <option value="admin">
                    {/* <NavLink to={"/admin"}>Admin</NavLink> */}
                    Admin
                  </option>
                  <option value="login">
                    {/* <NavLink to={"/login"}>Login</NavLink> */}
                    Login
                  </option>
                </select>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <select name="shop">
                  <option value="shop">Shop</option>
                </select>
              </li>
              <li>
                <select name="vendors">
                  <option value="vendors">Vendors</option>
                </select>
              </li>
              <li>
                <select name="menu">
                  <option value="menu">Mega Menu</option>
                </select>
              </li>
              <li>
                <select name="blog">
                  <option value="blog">Blog</option>
                </select>
              </li>
              <li>
                <select name="pages">
                  <option value="pages">Pages</option>
                </select>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </div>
          <div className="right_items">
            <img src={headphone} alt="headphone" />
            <div className="phone1">
              <h3>1900 - 888</h3>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
