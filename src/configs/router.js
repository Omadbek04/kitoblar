import React from "react";

export const AuthRoutes = [
  {
    key: "register",
    path: "/register",
    component: React.lazy(() => import("../pages/auth/register")),
  },
  {
    key: "login",
    path: "/login",
    component: React.lazy(() => import("../pages/auth/login")),
  },
];
export const ProtectedRoutes = [
  {
    key: "home",
    path: "/",
    authority: ["admin", "user"],
    component: React.lazy(() => import("../pages/private/home")),
  },
  {
    key: "books",
    path: "/books",
    authority: ["admin", "user"],
    component: React.lazy(() => import("../pages/private/books")),
  },
  {
    key: "profile",
    path: "/profile",
    authority: ["admin", "user"],
    component: React.lazy(() => import("../pages/private/profile")),
  },
  {
    key: "security",
    path: "/security",
    authority: ["admin", "user"],
    component: React.lazy(() => import("../pages/private/profile/security")),
  },
  {
    key: "setings",
    path: "/setings",
    authority: ["admin", "user"],
    component: React.lazy(() => import("../pages/private/profile/setings")),
  },
  {
    key: "create-book",
    path: "/create-book",
    authority: ["admin"],
    component: React.lazy(() => import("../pages/private/create/create-book")),
  },
  {
    key: "create-author",
    path: "/create-author",
    authority: ["admin"],
    component: React.lazy(() => import("../pages/private/create/create-author")),
  },
];
