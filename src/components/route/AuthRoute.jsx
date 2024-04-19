import React from "react";
import { isAuthenticated } from "../../store";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
};

export default AuthRoute;
