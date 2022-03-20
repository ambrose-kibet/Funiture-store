import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../Context/CartProvider";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const [colorNumber, setcolorNumber] = useState(0);
  const [amount, setAmount] = useState(1);
  const { id, colors, stock } = product;
  const mainColor = colors[colorNumber];
  const increase = () => {
    let newAmount = amount;
    newAmount += 1;
    if (newAmount > stock) {
      newAmount = stock;
    }
    setAmount(newAmount);
  };
  const decrease = () => {
    let newAmount = amount;
    newAmount -= 1;
    if (newAmount <= 0) {
      newAmount = 1;
    }
    setAmount(newAmount);
  };
  return (
    <article className="add-container">
      <div className="color-btn-container">
        <span>Colors : </span>
        {colors.map((color, index) => {
          return (
            <button
              className={
                index === colorNumber ? "btn-color active-color" : "btn-color"
              }
              key={index}
              onClick={() => setcolorNumber(index)}
              style={{ background: color }}
            >
              {index === colorNumber ? (
                <FaCheck className="color-icon" />
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="cart-btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="hero-btn products-btn"
          style={{ marginBottom: "1rem" }}
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          Add To Cart
        </Link>
      </div>
    </article>
  );
};

export default AddToCart;
