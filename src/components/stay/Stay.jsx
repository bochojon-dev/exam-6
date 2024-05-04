import React from "react";
import "../stay/Stay.css";
import { FiSend } from "react-icons/fi";
import stay from "../../assets/stay.png";

const Stay = () => {
  return (
    <div className="stay">
      <div className="container">
        <div className="stay_contents">
          <div className="banner_content1">
            <h3>Stay home & get your daily needs from our shop</h3>
            <p>
              Start You'r Daily Shopping with <span>Nest Mart</span>
            </p>
            <div className="email">
              <div className="send_email">
                <FiSend />
                <input type="text" placeholder="Your email address" />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
          <img src={stay} alt="stay" />
        </div>
      </div>
    </div>
  );
};

export default Stay;
