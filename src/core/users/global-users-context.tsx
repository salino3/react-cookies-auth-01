import React from "react";
import { GlobalStateUsers } from "./interfaces";

export const GlobalUsersContext = React.createContext<GlobalStateUsers>(
  {} as GlobalStateUsers
);
