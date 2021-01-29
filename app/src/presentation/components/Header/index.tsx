import React, {useState, useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {weekDays} from '../../utils/weekDays';

interface RequestProps {
  title?: string | undefined;
  namePage?: string | undefined;
  backgroundColor: string;
  paddingBottom?: number | undefined;
  filter?: boolean;
}

const Header: React.FC<RequestProps> = ({
  title = undefined,
  namePage = undefined,
  backgroundColor,
  paddingBottom,
  filter = false,
}: RequestProps) => {
  const navigation = useNavigation();
  const [filterReady, setFilterReady] = useState(false);

  const [optionsMatter, setOptionsMatter] = useState<IPropsOption[]>([]);
  const [optionsWeek] = useState<IPropsOption[]>(weekDays);

  useEffect(() => {
    async function execute() {
      if (filter && !filterReady) {
        const matters = await AsyncStorage.getItem('@Estude:Matters');
        if (matters) {
          const parsedMatters = JSON.parse(matters);
          setOptionsMatter((oldValues) => [...oldValues, ...parsedMatters]);
        }
        setFilterReady(true);
      }
    }
    execute();
  }, [filter, filterReady]);

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
