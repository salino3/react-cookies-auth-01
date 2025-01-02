import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppFunctions } from "../../hooks";
import { routesApp } from "../interface-routes";

export const PrivateRoutes: React.FC = () => {
  const navigate = useNavigate();

  const { getAuthToken } = useAppFunctions();

  const token = getAuthToken();

  if (token) {
    navigate(routesApp.root);
  }
  return <Outlet />;
};
