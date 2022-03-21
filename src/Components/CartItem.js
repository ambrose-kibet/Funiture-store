import React from "react";
import { formatPrice } from "../utils";
import { useCartContext } from "../Context/CartProvider";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
const CartItem = ({ id, color, amount, image, price, max, name }) => {
  const { removeItem, toggleAmount } = useCartContext();
  return (
    <article className="cart-item">
      <div className="item-container">
        <div className="item-img-container">
          <img src={image} alt={name} className="item-img" />
        </div>
        <div className="item-desc">
          <h5>{name}</h5>
          <p className="color-p">
            Color:
            <span
              className="items-color"
              style={{
                background: `${color}`,
                color: `transparent`,
                height: "1.1rem",
                width: "1.1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              00
            </span>
          </p>
          <p className="price hide-price"> {formatPrice(price)} </p>
        </div>
      </div>
      <div className="price-container">
        <p className="price "> {formatPrice(price)}</p>
      </div>
      <div className="quantity-container">
        <div className="cart-btns">
          <button
            className="cart-btn"
            onClick={() => toggleAmount(id, amount, max, "decrease")}
          >
            <FaMinus className="cart-icon" />
          </button>
          <h4>{amount}</h4>
          <button
            className="cart-btn"
            onClick={() => toggleAmount(id, amount, max, "increase")}
          >
            <FaPlus className="cart-icon" />
          </button>
        </div>
      </div>
      <div className="subtotal-container">
        <p className="price show-sub">{formatPrice(price * amount)}</p>{" "}
        <button className="delete-btn" onClick={() => removeItem(id)}>
          <FaTrash className="delete-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
