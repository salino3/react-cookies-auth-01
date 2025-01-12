import React from "react";
import { CompaniesPage } from "../../pods";
import "./companies.styles.scss";

export const CompaniesLayout: React.FC = () => {
  return (
    <div className="rootCompaniesLayout">
      <CompaniesPage />
    </div>
  );
};
