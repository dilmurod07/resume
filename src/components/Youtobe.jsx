import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../app.scss";
const Youtobe = () => {
  const [football, setFootball] = useState([]);
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
      setFootball(res.data);
      console.log(football.category.image);
    });
  }, []);
  console.log(football);
  return (
    <div>
      <h1 className="informatin">
        qaytaraman men bunda koproq ish qolimda keladi men portfoliaga e'tibor
        bermaganman yaxshisi men bilan bog'laning
      </h1>

      {football.map((users) => {
        return (
          <div className="ballcards">
            <div className="ball" key={users.category.id}>
              <h1>{users.category.name}</h1>
              <h2>{users.price}</h2>
              <h3>{users.title}</h3>
              <img className="ballimg" src={users.images} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Youtobe;
