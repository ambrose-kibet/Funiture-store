import React from "react";
import CartColumns from "./CartColumns";
import { useCartContext } from "../Context/CartProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import CartTotals from "./CartTotals";
const CartComponent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <article className="">
      <CartColumns />

      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="cart-links">
        <Link
          to="/products"
          className="hero-btn"
          style={{
            margin: "0.5em 0.5rem",
            padding: "0.25rem",
            letterSpacing: ".1rem",
          }}
        >
          Continue Shopping
        </Link>
        <button className="clear-cart" onClick={clearCart}>
          {" "}
          Clear Shopping Cart
        </button>
      </div>

      <CartTotals />
    </article>
  );
};
export default CartComponent;
