import React, {useState, useCallback, useEffect} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Filter from '../Filter';
import {IPropsOption} from '../Dropdown';

import {
  Container,
  NavigationTopGroup,
  NavigationTopTitle,
  Title,
} from './styles';
import IHttpClient from '../../../providers/HttpClient/models/IHttpClient';
import getMatter from '../../utils/getMatter';
import getWeek from '../../utils/getWeek';

interface RequestProps {
  title?: string | undefined;
  namePage?: string | undefined;
  backgroundColor: string;
  paddingBottom?: number | undefined;
  filter?: boolean;
  httpClient?: IHttpClient;
}

const Header: React.FC<RequestProps> = ({
  title = undefined,
  namePage = undefined,
  backgroundColor,
  paddingBottom,
  filter = false,
  httpClient,
}: RequestProps) => {
  const navigation = useNavigation();
  const [filterReady, setFilterReady] = useState(false);

  const [optionsMatter, setOptionsMatter] = useState<IPropsOption[]>([
    {label: 'Selecione a Matéria', value: 0},
  ]);
  const [optionsWeek, setOptionsWeek] = useState<IPropsOption[]>([
    {label: 'Selecione o Dia', value: 0},
  ]);

  useEffect(() => {
    async function execute() {
      if (filter && httpClient && !filterReady) {
        const matters = await getMatter(httpClient);
        const weeks = await getWeek(httpClient);
        if (matters) {
          setOptionsMatter((oldValues) => [...oldValues, ...matters]);
        }
        if (weeks) setOptionsWeek((oldValues) => [...oldValues, ...weeks]);
        setFilterReady(true);
      }
    }
    execute();
  }, [httpClient, filter, filterReady]);

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
