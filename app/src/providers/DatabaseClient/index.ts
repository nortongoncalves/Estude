import FirestoreClient from './implementations/FirestoreClient';
import IDatabaseClient from './models/IDatabaseClient';

const databaseClient: IDatabaseClient = new FirestoreClient();

export {databaseClient};
