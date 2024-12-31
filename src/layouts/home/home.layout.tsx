import React from "react";
import { Home } from "../../pods";
import "./home.styles.scss";

export const HomeLayout: React.FC = () => {
  return (
    <main className="rootHomeLayout">
      <Home />
    </main>
  );
};
