import React from "react";
import { userRole } from "../store";

function ChekAuth({ userRole, role, children }) {
  return role.some((el) => el === userRole) ? <div>{children}</div> : <h1>Not Found</h1>;
}

export default ChekAuth;
