import React from 'react';
import {
  Container,
  ContainerCard,
  BackgroundColorStatusbar,
  SafeAreaView,
} from './styles';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import Card from '../../components/Card';

const TeacherList: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BackgroundColorStatusbar}
      />
      <Container>
        <Header
          title="Professores Disponíveis"
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
          />
          <Card
            description="Entusiasta das melhores Inteligência Artificial do mundo.
            Criador do Jarbas usado nos filmes dos vingadores. O melhor professor dessa área que irá ver.
            Isso mesmo pasmem, Tony Stark me contratou."
            matter="Tecnologia"
            name="John Doe"
            priceHour="20,50"
          />
        </ContainerCard>
      </Container>
    </SafeAreaView>
  );
};

export default TeacherList;
