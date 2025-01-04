import React from "react";
import { Link } from "react-router-dom";
import { routesApp } from "../../router";
import "./users-page.styles.scss";

export const UsersPage: React.FC = () => {
  return (
    <div className="rootUsersPage">
      <section className="breadcrumbs">
        <span>
          <Link to={routesApp?.dashboard}>Dashboard</Link>
        </span>
        /
        <span>
          <Link to={routesApp?.users}>Users</Link>
        </span>
      </section>
      <h1>Users Page</h1>
      <p>Welcome to the Users Page</p>
      <p>This page lists all users</p>
    </div>
  );
};
