import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { UserContext } from "../../App";

const RequireAuth = ({children}) => {
  let auth = useAuth();
  console.log(auth);
  let location = useLocation;

  if (!auth[0].success) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export function useAuth() {
  return useContext(UserContext);
}


export default RequireAuth;
