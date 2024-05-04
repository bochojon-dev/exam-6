import React from "react";
import "../card-icons/CardIcons.css";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";

const CardIcons = () => {
  const icons = [
    {
      id: "id-1",
      image: icon1,
      title: "Best prices & offers",
      desc: "Orders $50 or more",
    },
    {
      id: "id-2",
      image: icon2,
      title: "Free delivery",
      desc: "24/7 amazing services",
    },
    {
      id: "id-3",
      image: icon3,
      title: "Great daily deal",
      desc: "When you sign up",
    },
    {
      id: "id-4",
      image: icon4,
      title: "Wide assortment",
      desc: "Mega Discounts",
    },
    {
      id: "id-5",
      image: icon5,
      title: "Easy returns",
      desc: "Within 30 days",
    },
  ];
  const card_icon = icons?.map((e) => (
    <div key={e.id} className="card_icon">
      <img src={e.image} alt={e.title} />
      <div className="icon_text">
        <h3>{e.title}</h3>
        <p>{e.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="card_icons">{card_icon}</div>
    </div>
  );
};

export default CardIcons;
