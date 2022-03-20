import React from "react";
import { FaRegSadTear } from "react-icons/fa";
const ErrorComponent = () => {
  return (
    <div className="error-container">
      <FaRegSadTear className="error-icon" />
      <h3 className="error-msg">sorry something went wrong!</h3>
    </div>
  );
};

export default ErrorComponent;
