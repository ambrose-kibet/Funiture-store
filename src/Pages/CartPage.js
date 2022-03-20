import React from "react";
import { Link } from "react-router-dom";
import { PageHero, CartComponent } from "../Components";
import { useCartContext } from "../Context/CartProvider";
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <section className="main-container">
        <h3 style={{ textAlign: "center" }}>Your Cart is Empty</h3>
        <div style={{ display: "flex" }}>
          <Link to="/products" className="hero-btn products-btn">
            Fill It
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="main-container">
      <PageHero page="cart" />
      <CartComponent />
    </section>
  );
};

export default CartPage;
