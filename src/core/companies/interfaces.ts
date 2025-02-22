export interface Company {
  id?: number;
  name: string;
  email: string;
  industry: string;
  password: string | null;
  head_quarters: string;
}

export interface CompanyRegisterForm {
  name: string;
  email: string;
  industry: string;
  password: string;
  passwordConfirm: string;
  head_quarters: string;
}

export interface CompanyLoginForm {
  email: string;
  password: string;
}

export interface StateCompanies {
  companies: Company[];
}

export interface GlobalStateCompanies {
  companiesState: StateCompanies;
  setUsersState: React.Dispatch<React.SetStateAction<StateCompanies>>;
}

export const initialStateCompanies: StateCompanies = {
  companies: [],
};
