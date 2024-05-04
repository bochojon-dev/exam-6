import React from "react";
import "../feature/Feature.css";
import fruit1 from "../../assets/fruit1.svg";
import fruit2 from "../../assets/fruit2.svg";
import fruit3 from "../../assets/fruit3.svg";
import fruit4 from "../../assets/fruit4.svg";
import fruit5 from "../../assets/fruit5.svg";
import fruit6 from "../../assets/fruit6.svg";
import fruit7 from "../../assets/fruit7.svg";
import fruit8 from "../../assets/fruit8.svg";
import fruit9 from "../../assets/fruit9.svg";
import fruit10 from "../../assets/fruit10.svg";

const Feature = () => {
  const fruits = [
    {
      id: 1,
      image: fruit1,
      title: "Cake & Milk",
      item: "26 items",
      background: "#F2FCE4",
    },
    {
      id: 2,
      image: fruit2,
      title: "Organic Kiwi",
      item: "28 items",
      background: "#FFFCEB",
    },
    {
      id: 3,
      image: fruit3,
      title: "Peach",
      item: "14 items",
      background: "#ECFFEC",
    },
    {
      id: 4,
      image: fruit4,
      title: "Red Apple",
      item: "54 items",
      background: "#FEEFEA",
    },
    {
      id: 5,
      image: fruit5,
      title: "Snack",
      item: "56 items",
      background: "#FFF3EB",
    },
    {
      id: 6,
      image: fruit6,
      title: "Vegetables",
      item: "72 items",
      background: "#FFF3FF",
    },
    {
      id: 7,
      image: fruit7,
      title: "Strawberry",
      item: "36 items",
      background: "#F2FCE4",
    },
    {
      id: 8,
      image: fruit8,
      title: "Black plum",
      item: "123 items",
      background: "#FEEFEA",
    },
    {
      id: 9,
      image: fruit9,
      title: "Custard apple",
      item: "34 items",
      background: "#FFFCEB",
    },
    {
      id: 10,
      image: fruit10,
      title: "Coffe & Tea",
      item: "89 items",
      background: "#FEEFEA",
    },
  ];
  const feature_item = fruits?.map((e) => (
    <div
      key={e.id}
      style={{ background: `${e.background}` }}
      className="feature_item"
    >
      <img src={e.image} alt={e.title} />
      <h4>{e.title}</h4>
      <p>{e.item}</p>
    </div>
  ));
  return (
    <div className="feature">
      <div className="container">
        <div className="feature_contents">
          <div className="title">
            <h3>Featured Categories</h3>
            <div className="items">
              <p>Cake & Milk</p>
              <p>Coffes & Teas</p>
              <p>Pet Foods</p>
              <p>Vegetables</p>
            </div>
          </div>
          <div className="feature_items">{feature_item}</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
