import React from "react";
import { GlobalStateUsers } from ".";

export const GlobalUsersContext = React.createContext<GlobalStateUsers>(
  {} as GlobalStateUsers
);
