import axios, {AxiosResponse} from 'axios';
import IHttpClient, {
  HttpClientParams,
  HttpClientResponse,
} from '../models/IHttpClient';

class AxiosHttpClient implements IHttpClient {
  private axiosResponse: AxiosResponse = {} as AxiosResponse;

  public async get<IResponseData>({
    url,
    headers,
  }: HttpClientParams): Promise<HttpClientResponse<IResponseData>> {
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

export default AxiosHttpClient;
