import React from "react";
import { UsersPage } from "../../pods";
import { Header } from "../../common-app";
import "./users.styles.scss";

export const UsersLayout: React.FC = () => {
  return (
    <div className="rootUsersLayout">
      <Header />
      <UsersPage />
    </div>
  );
};
