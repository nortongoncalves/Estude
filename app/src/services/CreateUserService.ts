import Users, {IRequestUsers} from '../models/Users';
import IDatabaseClient from '../providers/DatabaseClient/models/IDatabaseClient';

class CreateUserService {
  private databaseClient: IDatabaseClient;

  constructor(databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient;
  }

  public async execute({
    avatarLink,
    biography,
    email,
    name,
  }: IRequestUsers): Promise<void> {
    const user = new Users({
      avatarLink,
      biography,
      email,
      name,
    });

    this.databaseClient.create({
      collection: 'users',
      data: user,
    });
  }
}

export default CreateUserService;
