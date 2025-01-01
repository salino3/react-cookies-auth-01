export interface Company {
  id: number;
  name: string;
  email: string;
  industry: string;
  password: string | null;
  head_quarters: string;
}

export interface StateCompanies {
  data: Company;
}

export interface GlobalStateCompanies {
  state: StateCompanies;
  // actions: Actions;
}
