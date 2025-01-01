interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: "light" | "dark";
}

export type All_Actions = UPDATE_THEME;

//----------------------------------------------------------------

export interface WorkRelationships {
  id: number;
  user_id: number;
  company_id: number;
  role: string;
  status: "active" | "pending" | "left";
}

export interface StateApp {
  theme: "light" | "dark";
  workRelationships: WorkRelationships[];
}

export interface GlobalStateApp {
  state: StateApp;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
}

export const initialState: StateApp = {
  theme: "light",
  workRelationships: [],
};
