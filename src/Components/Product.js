import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils";
const Product = ({ id, image, name, price }) => {
  return (
    <article className="product-card">
      <div className="product-header">
        <img src={image} alt={name} className="featured-img" />
        <div className="link-overlay">
          <Link to={`/products/${id}`} className="icon-link">
            <FaSearch className="nav-icon" />
          </Link>
        </div>
      </div>
      <div className="product-body">
        <p>{name}</p>
        <p className="price">{formatPrice(price)}</p>
      </div>
    </article>
  );
};

export default Product;
