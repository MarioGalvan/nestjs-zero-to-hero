import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
  private readonly fetchApi = fetch;
  async get<T>(url: string): Promise<T> {
    const response = await this.fetchApi(url);
    const data: T = await response.json();
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axiosapi = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axiosapi.get<T>(url);
    return data;
  }
}
