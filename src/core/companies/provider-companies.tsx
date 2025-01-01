import React from "react";
import {
  GlobalCompaniesContext,
  initialStateCompanies,
  StateCompanies,
} from ".";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProviderCompanies: React.FC<Props> = ({ children }) => {
  const [companiesState, setUsersState] = React.useState<StateCompanies>(
    initialStateCompanies
  );

  return (
    <GlobalCompaniesContext.Provider value={{ companiesState, setUsersState }}>
      {children}
    </GlobalCompaniesContext.Provider>
  );
};
