import React from "react";
import "./home.styles.scss";
import { BoxInput } from "../../common-app";

export const Home: React.FC = () => {
  return (
    <div className="rootHomePage">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <form>
        <BoxInput name="name" pl="Name" type="text" />
      </form>
    </div>
  );
};
