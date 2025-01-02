import axios, { AxiosResponse } from "axios";
import { Company, User, UserLoginForm, apisApp } from ".";

const { baseBackend } = apisApp;

export class ServicesApp {
  public static async loginUser(user: UserLoginForm): Promise<AxiosResponse> {
    return await axios
      .post(`${baseBackend}/auth/users/login`, user, {
        withCredentials: true,
      })
      .catch((err) => {
        console.error(err);
        // alert("Error: " + err.message);
        return Promise.reject(err);
      });
  }

  public static async getUsers(): Promise<AxiosResponse<User[]>> {
    return await axios.get(`${baseBackend}/users`);
  }

  public static async getCompanies(): Promise<AxiosResponse<Company[]>> {
    return await axios.get(`${baseBackend}/companies`);
  }
}
