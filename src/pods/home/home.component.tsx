import React from "react";
import { FormLogin } from "./components";
import "./home.styles.scss";

export const Home: React.FC = () => {
  return (
    <div className="rootHomePage">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <FormLogin />
    </div>
  );
};
