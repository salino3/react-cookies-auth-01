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
      <table className="table usersList">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {usersData.slice(usersData?.length - 5).map((user) => (
            <tr key={user.id}>
              <th scope="row"></th>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
