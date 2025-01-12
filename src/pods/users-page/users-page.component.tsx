import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AxiosResponse } from "axios";
import { ServicesApp, User } from "../../core";
import { UserCard } from "./components";
import { routesApp } from "../../router";
import "./users-page.styles.scss";

export const UsersPage: React.FC = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [numList, setNumList] = useState<number>(5);
  const [showSeeMore, setShowSeeMore] = useState<boolean>(true);

  useEffect(() => {
    ServicesApp.getBatchUsers(5, numList)
      .then((response: AxiosResponse<User[], any>) => {
        setUsersData((prev) => [...prev, ...response.data]);
      })
      .catch((error) => {
        if (
          error.status === 404 &&
          error.response &&
          error.response.data === "No users found."
        ) {
          setShowSeeMore(false);
        }
        console.error(error);
      });
  }, [numList]);

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
      <table className="table userList">
        <thead>
          <tr>
            <th scope="col">👨‍💻</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user: User) => (
            <UserCard key={user?.id} user={user} />
          ))}
          {showSeeMore && (
            <tr>
              <td colSpan={4} className="smallNoPadding">
                <button
                  className="secundaryBtn"
                  onClick={() => setNumList((prev) => prev + 5)}
                >
                  <small>see more</small>
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
