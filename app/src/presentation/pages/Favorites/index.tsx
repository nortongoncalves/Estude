import React from 'react';
import AxiosHttpClient from '../../../providers/HttpClient/implementations/AxiosHttpClient';
import IHttpClient from '../../../providers/HttpClient/models/IHttpClient';

import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';
import Card from '../../components/Card';

import {
  SafeAreaView,
  BackgroundColorStatusbar,
  Container,
  ContainerCard,
} from './styles';

const Favorites: React.FC = () => {
  const httpClient: IHttpClient = new AxiosHttpClient();

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BackgroundColorStatusbar}
      />
      <Container>
        <Header
          httpClient={httpClient}
          title="Meus Professores Favoritos"
          namePage="Estudar"
          backgroundColor={BackgroundColorStatusbar}
          filter
        />
        <ContainerCard
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}>
          <Card
            description="Entusiasta das melhores Inteligência Artificial do mundo.
            Criador do Jarbas usado nos filmes dos vingadores. O melhor professor dessa área que irá ver.
            Isso mesmo pasmem, Tony Stark me contratou."
            matter="Tecnologia"
            name="John Doe"
            priceHour="20,50"
            liked
          />
          <Card
            description="Entusiasta das melhores Inteligência Artificial do mundo.
            Criador do Jarbas usado nos filmes dos vingadores. O melhor professor dessa área que irá ver.
            Isso mesmo pasmem, Tony Stark me contratou."
            matter="Tecnologia"
            name="John Doe"
            priceHour="20,50"
            liked
          />
        </ContainerCard>
      </Container>
    </SafeAreaView>
  );
};

export default Favorites;
