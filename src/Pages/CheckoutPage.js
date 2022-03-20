import React from "react";
import PageHero from "../Components/PageHero";
import { useCartContext } from "../Context/CartProvider";
import StripeCheckout from "../Components/StripeCheckout";
import { Link } from "react-router-dom";
const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main className="main-container">
      <PageHero page={"Checkout"} />
      {cart.length < 1 ? (
        <div className="empty">
          <h4>Your Cart is empty </h4>
          <Link
            to="/products"
            className="hero-btn products-btn"
            style={{ margin: "auto auto" }}
          >
            Fill it
          </Link>
        </div>
      ) : (
        <StripeCheckout />
      )}
    </main>
  );
};

export default CheckoutPage;
