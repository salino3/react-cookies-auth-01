import React from "react";
import { ViewUser } from "../../pods";
import { Header } from "../../common-app";
import "./view-user.styles.scss";

export const ViewUserLayout: React.FC = () => {
  return (
    <div className="rootUserLayout">
      <Header />
      <ViewUser />
    </div>
  );
};
