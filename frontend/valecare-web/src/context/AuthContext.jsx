import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("valecare_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (username) => {
    const u = { username };
    setUser(u);
    localStorage.setItem("valecare_user", JSON.stringify(u));
  };

  const register = (username) => {
    const u = { username };
    setUser(u);
    localStorage.setItem("valecare_user", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("valecare_user");
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
