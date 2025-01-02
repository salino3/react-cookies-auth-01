interface Routes {
  root: string;
  dashboard: string;
  // Private routes
  private: string;
  users: string;
  error404: string;
}

export const routesApp: Routes = {
  root: "/react-cookies-auth-01/",
  // Private routes
  private: "/react-cookies-auth-01/private/",
  users: "/react-cookies-auth-01/private/users",
  dashboard: "/react-cookies-auth-01/private/dashboard",
  error404: "/react-cookies-auth-01/*",
};
