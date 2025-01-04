import React from "react";
import {
  CompanyFormRegister,
  FormLoginCompany,
  FormLoginUser,
  UserFormRegister,
} from "./components";
import { Header } from "../../common-app";
import "./home.styles.scss";

export const Home: React.FC = () => {
  return (
    <div className="rootHomePage">
      <Header />
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <details>
        <summary>Register User</summary>
        <UserFormRegister />
      </details>
      <details>
        <summary>Register Company</summary>
        <CompanyFormRegister />
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
