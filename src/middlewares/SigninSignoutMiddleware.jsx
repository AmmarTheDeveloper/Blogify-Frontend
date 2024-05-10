import { verifyUser } from "../validation/verifyUser";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading/Loading";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SigninSignoutMiddleware = ({ children }) => {
  const user = useSelector((state) => state.userLoggedInState.user);
  return !user ? children : <Navigate to="/" />;
};
