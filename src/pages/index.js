import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../components/route/AuthRoute";
import ProtectedRoute from "../components/route/ProtectedRoute";
import { AuthRoutes, ProtectedRoutes } from "../configs/router";
import AppRoute from "../components/route/AppRoute";
import ChekAuth from "../components/ChekAuth";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          {ProtectedRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={
                <ChekAuth role={route.role}>
                  <AppRoute component={route.component} />
                </ChekAuth>
              }
            />
          ))}
        </Route>
        <Route path="/" element={<AuthRoute />}>
          {AuthRoutes.map((route) => (
            <Route key={route.key} path={route.path} element={<AppRoute component={route.component} />} />
          ))}
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
};

export default AllPages;
