import IHttpClient from '../providers/HttpClient/models/IHttpClient';
import {IPropsOption} from '../presentation/components/Dropdown';

interface IResponseData {
  id: string;
  value: string;
}

export default class GetMatterService {
  private httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  public async execute(): Promise<IPropsOption[] | null> {
    const {data} = await this.httpClient.get<IResponseData[]>({
      url: 'http://10.0.2.2:3000/materias',
    });

    if (!data) return null;

    const parsedData: IPropsOption[] = data.map((option) =>
      Object({label: option.value, value: option.id}),
    );

    return parsedData;
  }
}
