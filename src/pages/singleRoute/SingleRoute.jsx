import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../api";

const SingleRoute = () => {
  let [data, setData] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>SingleRoute</h2>
      <div className="product">
        <button></button>
        <img src={data?.image} alt={data?.title} />
        <p>{data?.category}</p>
        <h4>{data?.title}</h4>
      </div>
    </div>
  );
};

export default SingleRoute;
