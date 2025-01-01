export interface User {
  id: number;
  name: string;
  email: string;
  surname: string;
  password: string | null;
  age: number;
}

export interface StateUsers {
  data: User;
}

export interface GlobalStateUsers {
  state: StateUsers;
  // actions: Actions;
}
