import React from "react";
import {
  FormLoginCompany,
  FormLoginUser,
  UserFormRegister,
} from "./components";
import "./home.styles.scss";

export const Home: React.FC = () => {
  return (
    <div className="rootHomePage">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <details>
        <summary>Register User</summary>
        <UserFormRegister />
      </details>
      <hr />
      <details>
        <summary>Login Users</summary>
        <FormLoginUser />
      </details>
      <details>
        <summary>Login Companies</summary>
        <FormLoginCompany />
      </details>
    </div>
  );
};
