import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  console.log(isLoggedIn, '--------------');
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/auth/login" />;
};

export default PrivateRoute;
