import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      auth.logout();
    }
    navigate("/", { replace: true });
  }, []);

  return null;
};

export default Logout;
