import axios, { AxiosResponse } from "axios";
import { Company, User, apisApp } from ".";

const { baseBackend } = apisApp;

export class ServicesApp {
  public async getUsers(): Promise<AxiosResponse<User[]>> {
    return axios.get(`${baseBackend}/users`);
  }

  public async getCompanies(): Promise<AxiosResponse<Company[]>> {
    return axios.get(`${baseBackend}/companies`);
  }
}
