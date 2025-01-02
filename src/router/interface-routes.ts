interface Routes {
  root: string;
  dashboard: string;
  users: string;
  error404: string;
}

export const routesApp: Routes = {
  root: "/react-cookies-auth-01/",
  users: "/react-cookies-auth-01/users",
  dashboard: "/react-cookies-auth-01/dashboard",
  error404: "/react-cookies-auth-01/*",
};
