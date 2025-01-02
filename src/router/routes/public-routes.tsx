import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppFunctions } from "../../hooks";
import { routesApp } from "../interface-routes";

export const PublicRoutes: React.FC = () => {
  const navigate = useNavigate();
  const { getAuthToken } = useAppFunctions();

  React.useEffect(() => {
    const token = getAuthToken();
    if (token) {
      navigate(routesApp.dashboard);
    }
  }, [getAuthToken]);

  return <Outlet />;
};
