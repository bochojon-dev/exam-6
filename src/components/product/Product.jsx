import React, { useState, useEffect } from "react";
import "../product/Product.css";
import { Link } from "react-router-dom";
import axios from "../../api";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setData(res?.data))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  let products = data?.map((el) => (
    <div className="product_card" key={el.id}>
      <Link to={`/product/${el.id}`}>
        <img src={el.image} width={300} alt="product" />
      </Link>
      <h2>{el.title}</h2>
      <button>Learn more</button>
    </div>
  ));
  return (
    <div className="product">
      <div className="container">
        <div className="product_contents">
          <div className="product_title">
            <h2>Popular Products</h2>
            <ul>
              <li>All</li>
              <li>Milks & Dairies</li>
              <li>Coffes & Teas</li>
              <li>Pet Foods</li>
              <li>Meats</li>
              <li>Vegetables</li>
              <li>Fruits</li>
            </ul>
          </div>
          <div className="product_cards">{products}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
