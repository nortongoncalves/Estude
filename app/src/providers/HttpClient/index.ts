import AxiosHttpClient from './implementations/AxiosHttpClient';
import IHttpClient from './models/IHttpClient';

const httpClient: IHttpClient = new AxiosHttpClient();

export {httpClient};
