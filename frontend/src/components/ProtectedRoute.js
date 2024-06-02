import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();
  // Buffer to make sure the condition checking
  // only runs after isAuthenticated is defined
  if (isAuthenticated === null) {
    return null;
  }
  console.log("Inside ProtectedRoute, auth is: " + isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
