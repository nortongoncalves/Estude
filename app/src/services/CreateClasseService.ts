import Classes, {IRequestClasses} from '../models/Classes';
import IDatabaseClient from '../providers/DatabaseClient/models/IDatabaseClient';

class CreateUserService {
  private databaseClient: IDatabaseClient;

  constructor(databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient;
  }

  public async execute({cost, matter, userId}: IRequestClasses): Promise<void> {
    const classes = new Classes({
      cost,
      matter,
      userId,
    });

    this.databaseClient.create({
      collection: 'classes',
      data: classes,
    });
  }
}

export default CreateUserService;
