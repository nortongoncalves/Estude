export interface HttpClientParams {
  url: string;
  body?: JSON;
  headers?: {
    [key: string]: string;
  };
}

export interface HttpClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  request?: any;
}

export default interface IHttpClient {
  get: (params: HttpClientParams) => Promise<HttpClientResponse>;
}
