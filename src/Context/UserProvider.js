import React from "react";
import { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [myUser, setmyUser] = useState(null);
  useEffect(() => {
    if (isAuthenticated) {
      setmyUser(user);
    } else {
      setmyUser(false);
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
export default UserProvider;
