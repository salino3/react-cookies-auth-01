import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layouts";
import { routesApp } from "./interface-routes";

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
    path: routesApp?.users,
    element: <h1>Users</h1>,
    visibility: "private",
  },
  {
    path: routesApp?.error404,
    element: <h1>Error: 404</h1>,
    visibility: "public",
  },
];

// console.log(routes);

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element, visibility }) =>
        visibility === "public" ? (
          <Route key={path} path={path} element={element} />
        ) : (
          <Route key={path} path={path} element={element} />
        )
      )}
    </Routes>
  );
};
