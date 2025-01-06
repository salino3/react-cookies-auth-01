import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppFunctions } from "../../hooks";
import { routesApp } from "../../router";
import "./header.styles.scss";

export const Header: React.FC = () => {
  const location = useLocation();

  const { closeSession } = useAppFunctions();
  return (
    <header className="rootHeader">
      {location?.pathname === routesApp?.root ? (
        <h3>Home Page</h3>
      ) : (
        <button onClick={closeSession}>Exit</button>
      )}
      <nav>
        <ul>
          <li>
            <Link to={routesApp?.dashboard}>Dashboard</Link>
          </li>
          <li>
            <Link to="#">Other</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
