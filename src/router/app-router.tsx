import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layouts";
import { routesApp } from "./interface-routes";
import { PrivateRoutes, PublicRoutes } from "./routes";

interface PropsRoutes {
  path: string;
  element: JSX.Element;
  visibility: "public" | "private" | "restricted" | "admin";
}

const routes: PropsRoutes[] = [
  {
    path: routesApp?.root,
    element: <HomeLayout />,
    visibility: "public",
  },
  {
    path: routesApp?.users, // Ruta relativa al padre
    element: <h1>Users</h1>,
    visibility: "private",
  },
  {
    path: routesApp?.dashboard, // Ruta relativa o absoluta según el contexto
    element: <h1>Dashboard</h1>,
    visibility: "private",
  },
  {
    path: routesApp?.error404,
    element: <h1>Error: 404</h1>,
    visibility: "public",
  },
];

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element, visibility }) =>
        visibility === "public" ? (
          <Route key={path} path={routesApp?.root} element={<PublicRoutes />}>
            <Route path={path} element={element} />
          </Route>
        ) : visibility === "private" ? (
          <Route key={path} path={routesApp?.root} element={<PrivateRoutes />}>
            <Route path={path} element={element} />
          </Route>
        ) : (
          <Route key="error" path="*" element={<h1>Error: error</h1>} />
        )
      )}
    </Routes>
  );
};
