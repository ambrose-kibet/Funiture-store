import React, { useState, useEffect } from "react";
import "../stripe.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCartContext } from "../Context/CartProvider";
import { useUserContext } from "../Context/UserProvider";
import { formatPrice } from "../utils";
import { Navigate } from "react-router-dom";
import axios from "axios";
const promise = loadStripe(process.env.REACT_APP_CLIENT_PUBLIC_KEY);
const StripeCheckout = () => {
  return (
    <div style={{ margin: "auto auto" }} className="checkout-containerbody">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export const CheckoutForm = () => {
  const { cart, total_amount, shippin_fees, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, total_amount, shippin_fees })
      );

      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });
    if (payload.error) {
      setError(`payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      console.log(payload);
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        <Navigate To="/products" />;
      }, 10000);
    }
  };
  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <p>Your payment was successful!!</p>
        </article>
      ) : (
        <article>
          <h5>Hello {myUser && myUser.name}</h5>
          <p>Your total is {formatPrice(shippin_fees + total_amount)}</p>
          <p>Test Card Number: 4242 4242 4242 4242 </p>
        </article>
      )}
      <form className="checkoutform" id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          onChange={handleChange}
          options={cardStyle}
        />
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
          className="checkoutbutton"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* show any error that happens when processing */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* show success mesage on completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          payment succeeded
        </p>
      </form>
    </div>
  );
};

export default StripeCheckout;
