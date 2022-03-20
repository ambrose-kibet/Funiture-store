import React from "react";

const CartColumns = () => {
  return (
    <div className="columns-container">
      <article className="columns">
        <p>Item</p>
        <p>Price</p> <p>Quantity</p> <p>Subtotal</p>
      </article>
      <hr />
    </div>
  );
};

export default CartColumns;
