import React from "react";
import "../admin/Admin.css";
// import GoogleMapReact from "google-map-react";
// import { GrLocation } from "react-icons/gr";
import home from "../../assets/home.svg";
import user from "../../assets/contact-image.png";
import map from "../../assets/map.png";

const Admin = () => {
  // ymaps
  //   .load()
  //   .then((maps) => {
  //     const map = new maps.Map("your-map-container", {
  //       center: [-8.369326, 115.166023],
  //       zoom: 7,
  //     });
  //   })
  //   .catch((error) => console.log("Failed to load Yandex Maps", error));
  return (
    <div className="admin">
      <div className="admin_header">
        <div className="home_link">
          <img src={home} alt="home link" />
          <p>Home</p>
        </div>
        <p>></p>
        <p>Admin</p>
      </div>
      <div className="container">
        <div className="admin_contents">
          <div className="admin_title">
            <h3 className="title_help">How can I help you ?</h3>
            {/* {map} */}
            <div className="admin_items">
              <div className="admin_item">
                <h2>Admin panel</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="admin_item">
                <div className="admin_texts">
                  <div className="admin_text">
                    <h3>02. Employer Services</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                  <div className="admin_item">
                    <h3>01. Visit Feedback</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
                <div className="admin_texts">
                  <div className="admin_text">
                    <h3>03. Billing Inquires</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                  <div className="admin_text">
                    <h3>04. General Inquires</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="map" src={map} alt="map" />
          <div className="admin_items">
            <div className="admin_card">
              <h3>Office</h3>
              <div className="address">
                <p>205 North Michigan Avenue, Suite 810</p>
                <p>Chicago, 60601, USA</p>
                <p>
                  <span>Phone</span>: (123) 456-7890
                </p>
                <p>
                  <span>Email</span>: contact@Evara.com
                </p>
              </div>
              <button>
                {/* <img src={seeLocation} alt="location" /> */}
                View map
              </button>
            </div>
            <div className="admin_card">
              <h3>Studio</h3>
              <div className="address">
                <p>205 North Michigan Avenue, Suite 810</p>
                <p>Chicago, 60601, USA</p>
                <p>
                  <span>Phone</span>: (123) 456-7890
                </p>
                <p>
                  <span>Email</span>: contact@Evara.com
                </p>
              </div>
              <button>
                {/* <img src={seeLocation} alt="location" /> */}
                View map
              </button>
            </div>
            <div className="admin_card">
              <h3>Shop</h3>
              <div className="address">
                <p>205 North Michigan Avenue, Suite 810</p>
                <p>Chicago, 60601, USA</p>
                <p>
                  <span>Phone</span>: (123) 456-7890
                </p>
                <p>
                  <span>Email</span>: contact@Evara.com
                </p>
              </div>
              <button>
                {/* <img src={seeLocation} alt="location" /> */}
                View map
              </button>
            </div>
          </div>
          <div className="form_contents">
            <div className="form">
              <h3>Contact form</h3>
              <h2>Drop Us a Line</h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form action="">
                <div className="users">
                  <div className="user">
                    <input type="text" placeholder="First name" />
                    <input type="phone" placeholder="Your phone" />
                  </div>
                  <div className="user">
                    <input type="email" placeholder="Your email" />
                    <input type="phone" placeholder="Subject" />
                  </div>
                </div>
                <textarea
                  name=""
                  id=""
                  placeholder="Comments here..."
                ></textarea>
              </form>
            </div>
            <img src={user} alt="users" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
