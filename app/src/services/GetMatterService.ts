import IDatabaseClient from '../providers/DatabaseClient/models/IDatabaseClient';

interface IResponseData {
  id: string;
  value: string;
}
export default class GetMatterService {
  private databaseClient: IDatabaseClient;

  constructor(databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient;
  }

  public async execute(): Promise<IResponseData[]> {
    const matters = await this.databaseClient.findAll<IResponseData>({
      collection: 'matters',
    });

    return matters;
  }
}
