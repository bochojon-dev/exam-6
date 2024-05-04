import React from "react";
import "../header-top/HeaderTop.css";
import line from "../../assets/line.svg";
import { NavLink } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="headerTop">
      <div className="container">
        <div className="headerTop_contents">
          <div className="left_side">
            <ul>
              <li>
                <NavLink to={"/about"}>
                  <p>About Us</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>
                  <p>My Account</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/admin"}>
                  <p>Wishlist</p>
                </NavLink>
              </li>
              <li>
                <p>Order Tracking</p>
              </li>
            </ul>
          </div>
          <div className="right_side">
            <p>
              Need help? Call Us <span>+ 1800 900</span>
            </p>
            <select name="language">
              <option value="Eng">Eng</option>
              <option value="Ru">Ru</option>
              <option value="Uzb">Uzb</option>
            </select>
            <img src={line} alt="line" />
            <select name="currency">
              <option value="Usd">USD</option>
              <option value="Rub">RUB</option>
              <option value="Sum">UZS</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
