export interface WorkRelationships {
  id: number;
  user_id: number;
  company_id: number;
  role: string;
  status: "active" | "pending" | "left";
}

export interface StateApp {
  theme: "light" | "dark";
  workRelationships: WorkRelationships;
}

export interface GlobalStateApp {
  state: StateApp;
  // actions: Actions;
}
