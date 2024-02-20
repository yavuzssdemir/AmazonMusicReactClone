import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AuthNavigator = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  return isLoggedIn ? children : <Navigate to="/signin" state={{ prevPath: pathname }} />;
};

export default AuthNavigator;
