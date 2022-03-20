import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}> Oops... {error.message}</h2>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthWrapper;
