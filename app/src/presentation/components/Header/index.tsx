import React, {useState, useCallback, useEffect} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Filter from '../Filter';
import {IPropsOption} from '../Dropdown';
import HttpGetService from '../../../services/HttpGetService';

import {
  Container,
  NavigationTopGroup,
  NavigationTopTitle,
  Title,
} from './styles';
import IHttpClient from '../../../providers/HttpClient/models/IHttpClient';

interface RequestProps {
  title?: string | undefined;
  namePage?: string | undefined;
  backgroundColor: string;
  paddingBottom?: number | undefined;
  filter?: boolean;
  HttpClient?: IHttpClient;
}

const Header: React.FC<RequestProps> = ({
  title = undefined,
  namePage = undefined,
  backgroundColor,
  paddingBottom,
  filter = false,
  HttpClient,
}: RequestProps) => {
  const navigation = useNavigation();
  const [filterReady, setFilterReady] = useState(false);

  const [optionsMatter, setOptionsMatter] = useState<IPropsOption[]>([
    {label: 'Selecione a Matéria', value: 0},
  ]);
  const [optionsWeek, setOptionsWeek] = useState<IPropsOption[]>([
    {label: 'Selecione o Dia', value: 0},
  ]);

  const getMatter = useCallback(async (httpClient) => {
    const httpGetService = new HttpGetService(httpClient);

    const {data} = await httpGetService.execute({
      url: 'http://10.0.2.2:3000/materias',
    });
    if (!data) return;

    const parsedData: IPropsOption[] = data.map((option) =>
      Object({label: option.value, value: option.id}),
    );

    setOptionsMatter(parsedData);
  }, []);

  const getWeek = useCallback(async (httpClient) => {
    const httpGetService = new HttpGetService(httpClient);

    const {data} = await httpGetService.execute({
      url: 'http://10.0.2.2:3000/DiasSemana',
    });

    if (!data) return;

    const parsedData: IPropsOption[] = data.map((option) =>
      Object({label: option.value, value: option.id}),
    );

    setOptionsWeek(parsedData);
  }, []);

  useEffect(() => {
    if (filter) {
      getMatter(HttpClient);
      getWeek(HttpClient);
      setFilterReady(true);
    }
  }, [HttpClient, getMatter, getWeek, filter]);

  const handleBackPage = useCallback(
    (navigator: NavigationProp<ParamListBase>): void => {
      navigator.navigate('Dashboard');
    },
    [],
  );

  return (
    <Container backgroudColor={backgroundColor} paddingBottom={paddingBottom}>
      <NavigationTopGroup>
        <Icon
          name="arrow-left"
          size={20}
          color="#eaeaea"
          onPress={() => handleBackPage(navigation)}
        />
        {namePage && <NavigationTopTitle>{namePage}</NavigationTopTitle>}
      </NavigationTopGroup>
      {title && <Title>{title}</Title>}
      {filterReady && (
        <Filter optionsMatter={optionsMatter} optionsWeek={optionsWeek} />
      )}
    </Container>
  );
};

export default Header;
