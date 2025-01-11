import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AxiosResponse } from "axios";
import {
  GlobalAppContext,
  GlobalStateApp,
  ServicesApp,
  User,
} from "../../core";
import { UserCard } from "./components";
import { routesApp } from "../../router";
import "./users-page.styles.scss";

export const UsersPage: React.FC = () => {
  const { state } = useContext<GlobalStateApp>(GlobalAppContext);

  console.log("STATE: ", state.currentAccount);

  const [usersData, setUsersData] = useState<User[]>([]);

  const [numList, setNumList] = useState<number>(5);

  useEffect(() => {
    ServicesApp.getUsers()
      .then((response: AxiosResponse<User[], any>) => {
        setUsersData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const lastUserId: number | undefined =
    usersData?.length > 0 ? usersData[usersData.length - 1]?.id : 0;

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
          {usersData.slice(usersData?.length - numList).map((user: User) => (
            <UserCard
              key={user?.id}
              lastUserId={lastUserId}
              setNumList={setNumList}
              user={user}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
