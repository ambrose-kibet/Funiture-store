import React from "react";
import { formatPrice } from "../utils";
import { useCartContext } from "../Context/CartProvider";
import { Link } from "react-router-dom";
import { useUserContext } from "../Context/UserProvider";
const CartTotals = () => {
  const { total_amount, shippin_fees } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <article className="carttotals-container">
      <div className="cartTotals">
        <h4>
          Subtotal: <span className="price">{formatPrice(total_amount)}</span>
        </h4>
        <p>
          Shipping Fee:
          <span className="price"> {formatPrice(shippin_fees)}</span>
        </p>
        <hr />
        <h4>
          Order Total:{" "}
          <span className="price">
            {" "}
            {formatPrice(total_amount + shippin_fees)}
          </span>
        </h4>
      </div>
      <div>
        {myUser ? (
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        ) : (
          <button
            type="button"
            to="/checkout"
            className="checkout-btn"
            onClick={loginWithRedirect}
          >
            Login and Checkout
          </button>
        )}
      </div>
    </article>
  );
};

export default CartTotals;
