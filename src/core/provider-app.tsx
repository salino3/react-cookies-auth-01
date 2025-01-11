import React, { useCallback } from "react";
import { initialState, ReducerApp, GlobalAppContext, CurrentAccount } from ".";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProviderApp: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(ReducerApp, initialState);

  //
  const toggleTheme = useCallback(() => {
    dispatch({
      type: "UPDATE_THEME",
      payload: state.theme === "light" ? "dark" : "light",
    });
  }, []);

  // login account
  const loginAccount = useCallback(function (info: CurrentAccount) {
    dispatch({
      type: "LOGIN_ACCOUNT",
      payload: info,
    });
  }, []);

  return (
    <GlobalAppContext.Provider
      value={{ state, dispatch, toggleTheme, loginAccount }}
    >
      <main id={state.theme}>{children}</main>
    </GlobalAppContext.Provider>
  );
};
