import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  let isUserLoggedIn;

  const token = sessionStorage.getItem("userToken");
  if (token) {
    isUserLoggedIn = true;
  } else {
    isUserLoggedIn = false;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}