import React from "react";
import { useProductsContext } from "../Context/ProductsProvider";
import Loading from "./Loading";
import Product from "./Product";
import { Link } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
const Featured = () => {
  const { featuredProducts, productsError, productsLoading } =
    useProductsContext();
  if (productsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return (
      <main>
        <h3 className="featured-title">Featured</h3>
        <div className="underline"></div>
        <ErrorComponent />;
      </main>
    );
  }
  return (
    <main>
      <h3 className="featured-title">Featured</h3>
      <div className="underline"></div>
      <section className="featured-container">
        {featuredProducts.slice(0, 3).map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </section>
      <div className="product-link-container">
        <Link to="/products" className="hero-btn products-btn">
          All Products
        </Link>
      </div>
    </main>
  );
};

export default Featured;
