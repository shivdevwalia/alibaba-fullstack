import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ requiredRole, children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== requiredRole) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
