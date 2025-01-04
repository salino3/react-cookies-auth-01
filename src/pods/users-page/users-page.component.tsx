import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routesApp } from "../../router";
import { ServicesApp, User } from "../../core";
import "./users-page.styles.scss";

export const UsersPage: React.FC = () => {
  const [usersData, setUsersData] = useState<User[]>([]);

  const [numList, setNumList] = useState<number>(5);

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
            <th scope="col">👨‍💻</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {usersData.slice(usersData?.length - numList).map((user) => (
            <React.Fragment key={user?.id}>
              <tr>
                <th scope="row"></th>
                <td>{user?.name}</td>
                <td>{user?.surname}</td>
                <td>{user?.email}</td>
              </tr>
              {user?.id == usersData[usersData?.length - 1]?.id && (
                <tr>
                  <td colSpan={4} className="smallNoPadding">
                    <small>click here</small>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
