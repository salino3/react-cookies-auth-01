import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import {
  CompaniesLayout,
  DashboardLayout,
  HomeLayout,
  UsersLayout,
  ViewUserLayout,
} from "../layouts";
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
    element: <UsersLayout />,
    visibility: "private",
  },
  {
    path: routesApp?.user(":id"),
    element: <ViewUserLayout />,
    visibility: "private",
  },
  {
    path: routesApp?.companies,
    element: <CompaniesLayout />,
    visibility: "private",
  },
  {
    path: routesApp?.dashboard,
    element: <DashboardLayout />,
    visibility: "private",
  },
  {
    path: routesApp?.error404,
    element: <h1>Error: 404</h1>,
    visibility: "public",
  },
  {
    path: routesApp?.errorPrivate404,
    element: <h1>Error Private: 404</h1>,
    visibility: "private",
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
          <Route
            key={path}
            path={routesApp?.private}
            element={<PrivateRoutes />}
          >
            <Route path={path} element={element} />
          </Route>
        ) : (
          <Route key="error" path="*" element={<h1>Error: error</h1>} />
        )
      )}
    </Routes>
  );
};
