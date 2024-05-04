import React from "react";
import "../shop/Shop.css";
import background1 from "../../assets/banner-1.png";
import background2 from "../../assets/banner-2.png";
import background3 from "../../assets/banner-3.png";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop_cards">
          <div className="shop_card">
            <h3 style={{ width: 203 }}>
              Everyday Fresh & Clean with Our Products
            </h3>
            <button>Shop Now</button>
          </div>
          <div className="shop_card">
            <h3 style={{ width: 244 }}>Make your Breakfast Healthy and Easy</h3>
            <button>Shop Now</button>
          </div>
          <div className="shop_card">
            <h3 style={{ width: 198 }}>The best Organic Products Online</h3>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
