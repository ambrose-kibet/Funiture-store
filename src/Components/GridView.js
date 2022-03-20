import React from "react";
import { Product } from ".";
const GridView = ({ products }) => {
  return (
    <section className="grid-container">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </section>
  );
};

export default GridView;
