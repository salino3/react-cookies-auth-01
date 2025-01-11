interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: "light" | "dark";
}

interface LOGIN_ACCOUNT_PROPS {
  type: "LOGIN_ACCOUNT";
  payload: any | null;
}

export type All_Actions = UPDATE_THEME | LOGIN_ACCOUNT_PROPS;

//----------------------------------------------------------------

export interface WorkRelationships {
  id?: number;
  user_id: number;
  company_id: number;
  role: string;
  status: "active" | "pending" | "left";
}

export interface CurrentAccount {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

export interface StateApp {
  theme: "light" | "dark";
  workRelationships: WorkRelationships[];
  currentAccount: any | null;
}

export interface GlobalStateApp {
  state: StateApp;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
  loginAccount: (info: any) => void;
}

export const initialState: StateApp = {
  theme: "light",
  workRelationships: [],
  currentAccount: null,
};
