import IHttpClient, {
  HttpClientResponse,
  HttpClientParams,
} from '../providers/HttpClient/models/IHttpClient';

interface IResponse {
  id: string;
  value: string;
}

export default class GetMatterService {
  private responseData: HttpClientResponse<
    IResponse[]
  > = {} as HttpClientResponse;

  private HttpClient: IHttpClient;

  constructor(HttpClient: IHttpClient) {
    this.HttpClient = HttpClient;
  }

  public async execute({
    url,
    headers,
  }: HttpClientParams): Promise<HttpClientResponse<IResponse[]>> {
    this.responseData = await this.HttpClient.get({url, headers});
    return this.responseData;
  }
}
