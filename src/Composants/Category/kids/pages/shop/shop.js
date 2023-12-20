import React from "react";
import { BPRODUCTS } from "../../boysproducts";
import { GPRODUCTS } from "../../girlsproduct";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>ASDA Boy's clothes </h1>
      </div>

      <div className="products">
        {BPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="shopTitle">
        <h1>ASDA Girl's clothes </h1>
      </div>
      <br />
      <div className="products">
        {GPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      
    </div>
  );
};
