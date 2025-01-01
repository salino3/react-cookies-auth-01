import React from "react";
import { initialState, ReducerApp, GlobalAppContext } from ".";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProviderApp: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(ReducerApp, initialState);

  const toggleTheme = () => {
    dispatch({
      type: "UPDATE_THEME",
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <GlobalAppContext.Provider value={{ state, dispatch, toggleTheme }}>
      <main id={state.theme}>{children}</main>
    </GlobalAppContext.Provider>
  );
};
