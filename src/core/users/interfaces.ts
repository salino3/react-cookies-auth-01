export interface User {
  id?: number;
  name: string;
  email: string;
  surname?: string;
  password: string | null;
  age: number | null;
}

export interface UserRegisterForm {
  name: string;
  email: string;
  surname?: string;
  password: string;
  passwordConfirm: string;
  age: number | null;
}

export interface UserLoginForm {
  email: string;
  password: string;
}

export interface StateUsers {
  users: User[];
}

export interface GlobalStateUsers {
  usersState: StateUsers;
  setUsersState: React.Dispatch<React.SetStateAction<StateUsers>>;
}

export const initialStateUsers: StateUsers = {
  users: [],
};
