import firestore from '@react-native-firebase/firestore';
import IDatabaseClient, {
  IPropsCreate,
  IPropsFindAll,
} from '../models/IDatabaseClient';

class FirestoreClient implements IDatabaseClient {
  async create({collection, data}: IPropsCreate): Promise<string> {
    const user = await firestore().collection(collection).add(data);
    if (!user.id) {
      throw Error('Erro ao cadastrar o usuario');
    }

    return user.id;
  }

  async findAll<T>({collection}: IPropsFindAll): Promise<T[]> {
    console.log('entrou aqui');
    const querySnapshot = await firestore().collection(collection).get();

    const matters: T[] = querySnapshot.docs.map((data) => {
      return data.data();
    });

    return matters;
  }
}

export default FirestoreClient;
