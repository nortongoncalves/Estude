import firestore from '@react-native-firebase/firestore';
import IDatabaseClient, {IPropsCreate} from '../models/IDatabaseClient';

class FirestoreClient implements IDatabaseClient {
  async create({collection, data}: IPropsCreate): Promise<string> {
    const user = await firestore().collection(collection).add(data);
    if (!user.id) {
      throw Error('Erro ao cadastrar o usuario');
    }

    return user.id;
  }
}

export default FirestoreClient;
