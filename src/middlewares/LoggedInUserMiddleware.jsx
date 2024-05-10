import React, { useState, useEffect } from "react";
import { verifyUser } from "../validation/verifyUser";
import { Loading } from "../components/Loading/Loading";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function LoggedInUserMiddleware({ children }) {
  const user = useSelector((state) => state.userLoggedInState.user);
  return user ? children : <Navigate to="/signin" />;
}
