import React from "react";
import list from "../List";
import "../style/shop.css";
import Card from "./Card";

const Shop = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Shop;
