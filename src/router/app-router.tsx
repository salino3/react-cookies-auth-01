import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layouts";
import { appRoutes } from "./interface-routes";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={appRoutes?.root} element={<HomeLayout />} />
    </Routes>
  );
};
