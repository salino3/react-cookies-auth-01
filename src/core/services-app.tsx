import axios, { AxiosResponse } from "axios";
import { Company, User, UserLoginForm, apisApp } from ".";
import { useAppFunctions } from "../hooks";

const { baseBackend } = apisApp;

const { getEndTokenFromCookie } = useAppFunctions();

export class ServicesApp {
  // Auth

  public static async registerUser(user: User): Promise<AxiosResponse> {
    return await axios.post(`${baseBackend}/auth/users/register`, user, {
      withCredentials: true,
    });
  }

  public static async registerCompany(
    company: Company
  ): Promise<AxiosResponse> {
    return await axios.post(`${baseBackend}/auth/companies/register`, company, {
      withCredentials: true,
    });
  }

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

  public static async loginCompany(
    company: UserLoginForm
  ): Promise<AxiosResponse> {
    return await axios
      .post(`${baseBackend}/auth/companies/login`, company, {
        withCredentials: true,
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  }

  // Get Data

  public static async getUsers(): Promise<AxiosResponse<User[]>> {
    return await axios.get(`${baseBackend}/users`);
  }

  public static async getBatchUsers(
    limit: number = 5,
    offset: number = 0
  ): Promise<AxiosResponse<User[]>> {
    return await axios.get(
      `${baseBackend}/users/batch/get?limit=${String(limit)}&offset=${String(
        offset
      )}`
    );
  }

  public static async getCompanies(): Promise<AxiosResponse<Company[]>> {
    return await axios.get(`${baseBackend}/companies`);
  }

  public static async getUserById(id: string): Promise<AxiosResponse<User>> {
    return await axios.get(`${baseBackend}/users/${id}`);
  }

  // Update Data
  public static async updateUser(user: User): Promise<AxiosResponse> {
    return await axios
      .put(`${baseBackend}/users/${user.id}`, user, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "end_token": getEndTokenFromCookie(),
        },
      })
      .then((res: AxiosResponse) => {
        alert("User successfully updated");
        return res;
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  }

  // Delete
  public static async deleteUser(id: string): Promise<AxiosResponse> {
    return await axios
      .delete(`${baseBackend}/users/${id}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "end_token": getEndTokenFromCookie(),
        },
      })
      .then((res: AxiosResponse) => {
        alert("User successfully deleted");
        return res;
      });
  }
}
