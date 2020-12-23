import IHttpClient from '../../providers/HttpClient/models/IHttpClient';
import HttpGetService from '../../services/HttpGetService';
import {IPropsOption} from '../components/Dropdown';

const getMatter = async (
  httpClient: IHttpClient,
): Promise<IPropsOption[] | null> => {
  const httpGetService = new HttpGetService(httpClient);

  const {data} = await httpGetService.execute({
    url: 'http://10.0.2.2:3000/materias',
  });

  if (!data) return null;

  const parsedData: IPropsOption[] = data.map((option) =>
    Object({label: option.value, value: option.id}),
  );

  return parsedData;
};

export default getMatter;
