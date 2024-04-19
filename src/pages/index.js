import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../components/route/AuthRoute";
import ProtectedRoute from "../components/route/ProtectedRoute";
import { AuthRoutes, ProtectedRoutes } from "../configs/router";
import AppRoute from "../components/route/AppRoute";
import ChekAuth from "../components/ChekAuth";
import { useSelector } from "react-redux";

const AllPages = () => {
  const { isLogin } = useSelector((state) => state.session);
  const { role } = useSelector((state) => state.user);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<ProtectedRoute isAuthenticated={isLogin} />}>
          {ProtectedRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={
                <ChekAuth userRole={role} role={route.role}>
                  <AppRoute component={route.component} />
                </ChekAuth>
              }
            />
          ))}
        </Route>
        <Route path="/" element={<AuthRoute isAuthenticated={isLogin} />}>
          {AuthRoutes.map((route) => (
            <Route key={route.key} path={route.path} element={<AppRoute component={route.component} />} />
          ))}
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </Suspense>
  );
};

export default AllPages;
