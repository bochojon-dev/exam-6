import React, { useState, useEffect } from "react";
import "../product/Product.css";
import { Link } from "react-router-dom";
import axios from "../../api";

const Product = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [data, setData] = useState([]);
  // const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setData(res?.data))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("/products/categories")
  //     .then((res) => setCategory(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  const products = data?.map((el) => (
    <div className="product_card" key={el.id}>
      <Link to={`/product/${el.id}`}>
        <img src={el.image} width={300} alt="product" />
      </Link>
      <h3>{el.title}</h3>
      <p>{el.rate}</p>
      <p>
        By <span>`${el.category}`</span>
      </p>
      <button>Learn more</button>
    </div>
  ));

  // const categories = category?.map((e, i) => (
  //   <li key={i}>
  //     <buttun name={e}>{e}</buttun>
  //   </li>
  // ));
  return (
    <div className="product">
      <div className="container">
        <div className="product_contents">
          <div className="product_title">
            <h2>Popular Products</h2>
            <ul>
              <li>All</li>
              {/* {categories} */}
            </ul>
          </div>
          <div className="product_cards">{products}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
