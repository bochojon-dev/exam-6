import React, { useState, useEffect } from "react";
// import HeaderTop from "../../components/header-top/HeaderTop";
// import Navbar from "../../components/navbar/Navbar";
// import HeaderBottom from "../../components/header-bottom/HeaderBottom";
import Banner from "../../components/banner/Banner";
import Feature from "../../components/feature/Feature";
import Shop from "../../components/shop/Shop";
import Product from "../../components/product/Product";
import Stay from "../../components/stay/Stay";
import CardIcons from "../../components/card-icons/CardIcons";
import axios from "../../api";
// import Footer from "../../components/footer/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="home">
      {/* <HeaderTop /> */}
      {/* <Navbar /> */}
      {/* <HeaderBottom /> */}
      <Banner />
      <Feature />
      <Shop />
      <Product />
      <Stay />
      <CardIcons />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
