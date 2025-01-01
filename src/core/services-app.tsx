import axios, { AxiosResponse } from "axios";
import { User, apisApp } from ".";

export class ServicesApp {
  public async getUsers(): Promise<AxiosResponse<User[]>> {
    return axios.get(`${apisApp.baseBackend}/users`);
  }
}
