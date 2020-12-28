import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StatusBar from '../../components/StatusBar';

import {
  Container,
  Logo,
  Description,
  GroupLogo,
  GroupButtons,
  ButtonDarAulas,
  ButtonEstudar,
  ButtonsTitle,
  BackgroundImg,
  BackgroundColorStatusbar,
  SafeAreaView,
} from './styles';
import IHttpClient from '../../../providers/HttpClient/models/IHttpClient';
import AxiosHttpClient from '../../../providers/HttpClient/implementations/AxiosHttpClient';
import GetMatterService from '../../../services/GetMatterService';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToStudyPages = () => {
    navigation.navigate('Study');
  };

  const handleNavigateToGiveClassesPage = () => {
    navigation.navigate('GiveClasses');
  };

  useEffect(() => {
    async function execute() {
      const httpClient: IHttpClient = new AxiosHttpClient();
      const getMatterService = new GetMatterService(httpClient);
      const matters = await getMatterService.execute();

      if (matters) {
        const parsedMatters = JSON.stringify(matters);
        await AsyncStorage.setItem('@Estude:Matters', parsedMatters);
      }
    }

    try {
      execute();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BackgroundColorStatusbar}
      />
      <Container>
        <BackgroundImg width="100%" height="100%" />
        <GroupLogo>
          <Logo>Estude</Logo>
          <Description>
            A plataforma que une
            {'\n'}
            professores e alunos.
          </Description>
        </GroupLogo>
        <GroupButtons>
          <ButtonEstudar onPress={handleNavigateToStudyPages}>
            <Icon name="book-open" size={22} color="#eaeaea" />
            <ButtonsTitle>Estudar</ButtonsTitle>
          </ButtonEstudar>
          <ButtonDarAulas onPress={handleNavigateToGiveClassesPage}>
            <Icon name="chalkboard-teacher" size={22} color="#eaeaea" />
            <ButtonsTitle>Dar aulas</ButtonsTitle>
          </ButtonDarAulas>
        </GroupButtons>
      </Container>
    </SafeAreaView>
  );
};

export default Dashboard;
