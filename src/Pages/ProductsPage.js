import React from "react";
import { Filters, PageHero, ProductList, Sort } from "../Components";
const ProductsPage = () => {
  return (
    <main className="main-container">
      <PageHero page="products" />
      <section className="products-section">
        <Filters />
        <div className="all-products-container">
          <Sort />
          <ProductList />
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
