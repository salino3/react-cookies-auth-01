import React from "react";
import { GlobalUsersContext, initialStateUsers, StateUsers } from ".";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProviderUsers: React.FC<Props> = ({ children }) => {
  const [usersState, setUsersState] =
    React.useState<StateUsers>(initialStateUsers);

  return (
    <GlobalUsersContext.Provider value={{ usersState, setUsersState }}>
      {children}
    </GlobalUsersContext.Provider>
  );
};
