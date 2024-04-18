import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../components/route/AuthRoute";
import ProtectedRoute from "../components/route/ProtectedRoute";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="auth" element={<AuthRoute />} />
        <Route path="/" element={<ProtectedRoute />} />
      </Routes>
    </div>
  );
};

export default AllPages;
