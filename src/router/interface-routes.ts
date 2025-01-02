interface Routes {
  root: string;
  dashboard: string;
  //
  private: string;
  users: string;
  error404: string;
}

export const routesApp: Routes = {
  root: "/react-cookies-auth-01/",
  users: "/react-cookies-auth-01/users",
  //
  private: "/react-cookies-auth-01/private/",
  dashboard: "/react-cookies-auth-01/private/dashboard",
  error404: "/react-cookies-auth-01/*",
};
