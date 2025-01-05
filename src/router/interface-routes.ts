interface Routes {
  root: string;
  error404: string;
  // Private routes
  dashboard: string;
  private: string;
  users: string;
  user: (id: string) => string;
  companies: string;
  errorPrivate404: string;
}

export const routesApp: Routes = {
  root: "/react-cookies-auth-01/",
  error404: "/react-cookies-auth-01/*",
  // Private routes
  private: "/react-cookies-auth-01/private/",
  users: "/react-cookies-auth-01/private/users",
  user: (id: string) => `/react-cookies-auth-01/private/users/${id}`,
  companies: "/react-cookies-auth-01/private/companies",
  dashboard: "/react-cookies-auth-01/private/dashboard",
  errorPrivate404: "/react-cookies-auth-01/private/*",
};
