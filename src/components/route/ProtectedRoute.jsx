import React from "react";
import { isAuthenticated } from "../../store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated}) => {
  if (!isAuthenticated) {
    return <Navigate to={"/register"} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
