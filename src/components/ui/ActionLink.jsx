import React from "react";
import { Link } from "react-router-dom";

const ActionLink = ({ children, path }) => {
  return (
    <Link to={path} className="action-link">
      {children}
    </Link>
  );
};

export default ActionLink;
