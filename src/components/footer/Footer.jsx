import React from "react";
import "../footer/Footer.css";
import logo from "../../assets/Link-logo.png";
import clock from "../../assets/clock.svg";
import email from "../../assets/call.svg";
import call from "../../assets/clock.svg";
import address from "../../assets/address.svg";
import appstore from "../../assets/appstore.png";
import playMarket from "../../assets/play-market.png";
import payment from "../../assets/payment.png";
import follow1 from "../../assets/follow1.svg";
import follow2 from "../../assets/follow2.svg";
import follow3 from "../../assets/follow3.svg";
import follow4 from "../../assets/follow4.svg";
import follow5 from "../../assets/follow5.svg";
import phone from "../../assets/phone.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li className="par1">
              <p>Awesome grocery store website template</p>
            </li>
            <li>
              <img src={address} alt="addres" />
              <p className="par2">
                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                States
              </p>
            </li>
            <li>
              <img src={call} alt="call" />
              <p>Call Us:(+91) - 540-025-124553</p>
            </li>
            <li>
              <img src={email} alt="email" />
              <p>Email:sale@Nest.com</p>
            </li>
            <li>
              <img src={clock} alt="clock" />
              <p>Hours:10:00 - 18:00, Mon - Sat</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Delivery Information</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Terms & Conditions</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <p>Support Center</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Account</h3>
            </li>
            <li>
              <p>Sign In</p>
            </li>
            <li>
              <p>View Cart</p>
            </li>
            <li>
              <p>My Wishlist</p>
            </li>
            <li>
              <p>Track My Order</p>
            </li>
            <li>
              <p>Help Ticket</p>
            </li>
            <li>
              <p>Shipping Details</p>
            </li>
            <li>
              <p>Compare products</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Corporate</h3>
            </li>
            <li>
              <p>Become a Vendor</p>
            </li>
            <li>
              <p>Affiliate Program</p>
            </li>
            <li>
              <p>Farm Business</p>
            </li>
            <li>
              <p>Farm Careers</p>
            </li>
            <li>
              <p>Our Suppliers</p>
            </li>
            <li>
              <p>Accessibility</p>
            </li>
            <li>
              <p>Promotions</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Popular</h3>
            </li>
            <li>
              <p>Milk & Flavoured Milk</p>
            </li>
            <li>
              <p>Butter and Margarine</p>
            </li>
            <li>
              <p>Eggs Substitutes</p>
            </li>
            <li>
              <p>Marmalades</p>
            </li>
            <li>
              <p>Sour Cream and Dips</p>
            </li>
            <li>
              <p>Tea & Kombucha</p>
            </li>
            <li>
              <p>Cheese</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Install App</h3>
            </li>
            <li>
              <p>From App Store or Google Play</p>
            </li>
            <li className="download">
              <img src={appstore} alt="appstore" />
              <img src={playMarket} alt="play market" />
            </li>
            <li>
              <p>Secured Payment Gateways</p>
            </li>
            <li>
              <img src={payment} alt="payment" />
            </li>
          </ul>
        </div>
        <div className="footer_bottom">
          <div className="nest">
            <p>
              © 2022, <span>Nest</span> - HTML Ecommerce Template
            </p>
            <p>All rights reserved</p>
          </div>
          <div className="phone_number">
            <div className="phone">
              <img src={phone} alt="phone" />
              <div className="phone_texts">
                <h3>1900 - 6666</h3>
                <p>Working 8:00 - 22:00</p>
              </div>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" />
              <div className="phone_texts">
                <h3>1900 - 8888</h3>
                <p>24/7 Support Center</p>
              </div>
            </div>
          </div>
          <div className="follow">
            <div className="social_medias">
              <h4>Follow Us</h4>
              <img src={follow1} alt="social media" />
              <img src={follow2} alt="social media" />
              <img src={follow3} alt="social media" />
              <img src={follow4} alt="social media" />
              <img src={follow5} alt="social media" />
            </div>
            <p>Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
