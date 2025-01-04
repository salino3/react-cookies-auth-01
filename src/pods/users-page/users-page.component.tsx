import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routesApp } from "../../router";
import { ServicesApp, User } from "../../core";
import "./users-page.styles.scss";

export const UsersPage: React.FC = () => {
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    ServicesApp.getUsers()
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

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
      <h1 className="titleUsersPage">Users Page</h1>
      <h2 className="subTitleUsersPage">User List</h2>
      <section className="usersList">
        <ul>
          {usersData.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>
              <span>{user.surname}</span>
              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
