import React from "react";
import "../banner/Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/carousel1.jpg";
import img2 from "../../assets/carousel2.jpeg";
import img3 from "../../assets/carousel3.jpg";
import { FiSend } from "react-icons/fi";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="banner_swiper"
      >
        <SwiperSlide className="banner_item">
          <img src={img1} alt="nature" />
          <div className="banner_content">
            <h3>Fresh Vegetables Big discount</h3>
            <p>Save up to 50% off on your first order</p>
            <div className="email">
              <div className="send_email">
                <FiSend />
                <input type="text" placeholder="Your email address" />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner_item">
          <img src={img2} alt="nature" />
          <div className="banner_content">
            <h3>Fresh Vegetables Big discount</h3>
            <p>Save up to 50% off on your first order</p>
            <div className="email">
              <div className="send_email">
                <FiSend />
                <input type="text" placeholder="Your email address" />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner_item">
          <img src={img3} alt="nature" />
          <div className="banner_content">
            <h3>Fresh Vegetables Big discount</h3>
            <p>Save up to 50% off on your first order</p>
            <div className="email">
              <div className="send_email">
                <FiSend />
                <input type="text" placeholder="Your email address" />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
