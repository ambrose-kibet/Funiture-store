import React, { useEffect } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../Context/ProductsProvider";
import {
  Loading,
  ErrorComponent,
  PageHero,
  Stars,
  ProductImages,
  AddToCart,
} from "../Components";
import { formatPrice } from "../utils";

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const SingleProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    getSingleProduct,
    singleProductLoading,
    singleProductError,
    singleProduct,
  } = useProductsContext();
  useEffect(() => {
    getSingleProduct(`${single_product_url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [singleProductError]);

  if (singleProductLoading) {
    return (
      <main className="main-container">
        <Loading />
      </main>
    );
  }
  if (singleProductError) {
    return (
      <main className="main-container">
        <ErrorComponent />
      </main>
    );
  }

  const {
    name,
    company,
    description,
    id: sku,
    images,
    price,
    stars,
    stock,
    reviews,
  } = singleProduct;
  return (
    <main className="main-container">
      <PageHero page={`Products/${name}`} />
      <Link to="/products" className=" hero-btn products-btn">
        Back To Products
      </Link>
      <section className="single-product">
        <ProductImages images={images} />
        <article className="product-details">
          <h3>{name}</h3>
          <Stars stars={stars} reviews={reviews} />
          <p className="price">{formatPrice(price)}</p>
          <p>{description}</p>
          <p className="info">
            <span>Available: </span> {stock > 0 ? "in stock" : "out of stock"}
          </p>
          <p className="info">
            <span>SKU: </span> {sku}
          </p>
          <p className="info">
            <span>Brand: </span> {company}
          </p>
          <hr />
          {stock > 0 && <AddToCart product={singleProduct} />}
        </article>
      </section>
    </main>
  );
};

export default SingleProductPage;
