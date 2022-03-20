import React from "react";
import { useUserContext } from "../Context/UserProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { myUser } = useUserContext();

  if (!myUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
