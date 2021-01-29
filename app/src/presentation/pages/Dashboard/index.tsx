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
import {databaseClient} from '../../../providers/DatabaseClient';
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
      const getMatterService = new GetMatterService(databaseClient);
      const matters = await getMatterService.execute();
      console.log(matters);
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
