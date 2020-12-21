import axios, {AxiosResponse} from 'axios';
import IHttpClient, {
  HttpClientParams,
  HttpClientResponse,
} from '../models/IHttpClient';

export default class AxiosHttpClient implements IHttpClient {
  private axiosResponse: AxiosResponse = {} as AxiosResponse;

  public async get({
    url,
    headers,
  }: HttpClientParams): Promise<HttpClientResponse<AxiosResponse>> {
    try {
      this.axiosResponse = await axios.get(url, {
        headers,
      });
      if (!this.axiosResponse)
        throw Error('Erro ao realizar a chamada http get');
    } catch (error) {
      this.axiosResponse = error;
    }
    return this.axiosResponse;
  }
}
