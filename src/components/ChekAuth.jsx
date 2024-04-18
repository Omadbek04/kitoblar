import React from "react";
import { userRole } from "../store";

function ChekAuth({ role, children }) {
  console.log(role);
  console.log(userRole);

  return role.some(el=> el ===userRole)?<div>{children}</div> : <h1>Not Found</h1>;
}

export default ChekAuth;
