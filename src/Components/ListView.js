import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ListView = ({ products }) => {
  return (
    <section className="list-view">
      {products.map((item) => {
        const { id, image, price, description, name } = item;
        return (
          <article className="list-card" key={id}>
            <div className="item-header">
              <img src={image} alt={name} className="list-img" />
            </div>
            <div className="item-body">
              <h5 style={{ textTransform: "capitalize" }}>{name}</h5>
              <p className="price">{formatPrice(price)}</p>
              <p style={{ textAlign: "left" }}>
                {description.slice(0, 180)}...
              </p>
              <Link to={`/products/${id}`} className="hero-btn ">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
