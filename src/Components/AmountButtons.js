import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="cart-btns">
      <button className="cart-btn" onClick={decrease}>
        <FaMinus className="cart-icon" />
      </button>
      <h4>{amount}</h4>
      <button className="cart-btn" onClick={increase}>
        <FaPlus className="cart-icon" />
      </button>
    </div>
  );
};

export default AmountButtons;
