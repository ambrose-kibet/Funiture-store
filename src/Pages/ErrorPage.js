import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-container">
      <div className="error-content">
        <h1>404</h1>
        <h5>Sorry the page you tried cannot be found!</h5>
        <Link className="link-btn" to="/">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
