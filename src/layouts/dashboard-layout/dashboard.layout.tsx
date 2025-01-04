import React from "react";
import { Dashboard } from "../../pods";
import { Header } from "../../common-app";
import "./dashboard.styles.scss";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="rootDashboardLayout">
      <Header />
      <Dashboard />
    </div>
  );
};
