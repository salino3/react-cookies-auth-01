import React from "react";
import { GlobalStateCompanies } from "./interfaces";

export const GlobalCompaniesContext = React.createContext<GlobalStateCompanies>(
  {} as GlobalStateCompanies
);
