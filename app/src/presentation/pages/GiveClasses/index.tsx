import React, {useCallback, useRef} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {
  Container,
  SafeAreaView,
  BackgroundColorStatusbar,
  ButtonGoBack,
  ButtonGoBackText,
  ButtonGoBackGroup,
  Content,
  Subtitle,
  Title,
  SeparatorForm,
  SeparatorTitle,
} from './styles';

import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';
import Dropdown from '../../components/Dropdown';
import Input, {IInputHandles} from '../../components/Input';
import ContainerCostHour from '../../components/ContainerCostHour';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();
  const inputEmailRef = useRef<IInputHandles>(null);
  const inputAvatarRef = useRef<IInputHandles>(null);
  const inputWhatsappRef = useRef<IInputHandles>(null);
  const inputBioRef = useRef<IInputHandles>(null);
  const inputCostHour = useRef<IInputHandles>(null);

  const handlePressBack = useCallback(
    (navigate: NavigationProp<ParamListBase>) => {
      navigate.goBack();
    },
    [],
  );

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BackgroundColorStatusbar}
      />
      <ScrollView>
        <Container>
          <Header
            backgroundColor={BackgroundColorStatusbar}
            paddingBottom={30}
            namePage="Dar aula"
          />
          <Content>
            <Title>Cadastre-se</Title>
            <Subtitle>
              Suas informações ficarão na aba estudar para todo mundo ver
            </Subtitle>
            <SeparatorForm>
              <IconFontAwesome name="user" size={20} color="#979797" />
              <SeparatorTitle>Dados pessoais</SeparatorTitle>
            </SeparatorForm>
            <Input
              placeholder="Nome Completo"
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => inputEmailRef.current?.focus()}
              borderColorFocus="#1f9b78"
              color="#1f9b78"
            />
            <Input
              placeholder="Email (para contato)"
              returnKeyType="next"
              keyboardType="email-address"
              autoCorrect={false}
              ref={inputEmailRef}
              onSubmitEditing={() => inputAvatarRef.current?.focus()}
              borderColorFocus="#1f9b78"
              color="#1f9b78"
            />
            <Input
              placeholder="Link de uma foto sua (comece com: https://)"
              returnKeyType="next"
              keyboardType="email-address"
              autoCorrect={false}
              ref={inputAvatarRef}
              onSubmitEditing={() => inputWhatsappRef.current?.focus()}
              borderColorFocus="#1f9b78"
              color="#1f9b78"
            />
            <Input
              placeholder="Whatsapp (para contato)"
              returnKeyType="next"
              autoCorrect={false}
              ref={inputWhatsappRef}
              onSubmitEditing={() => inputBioRef.current?.focus()}
              keyboardType="numeric"
              borderColorFocus="#1f9b78"
              color="#1f9b78"
            />
            <Input
              placeholder="Biografia (me descreva o por que você é bom 😆)"
              returnKeyType="next"
              autoCorrect={false}
              multiline
              style={{height: 180}}
              ref={inputBioRef}
              textAlignVertical="top"
              borderColorFocus="#1f9b78"
              color="#1f9b78"
            />
            <SeparatorForm>
              <IconFontAwesome5
                name="chalkboard-teacher"
                size={20}
                color="#979797"
              />
              <SeparatorTitle>Dados Aulas</SeparatorTitle>
            </SeparatorForm>
            <Dropdown
              options={[
                {
                  label: 'Selecione a matéria',
                  value: 0,
                },
              ]}
              backgroundColor="#e5e5e5"
              border="2px solid #c8c8c9"
              marginBottom="15px"
            />
            <Input
              placeholder="Custo da sua aula (custo por hora em R$)"
              autoCorrect={false}
              multiline
              borderColorFocus="#1f9b78"
              color="#1f9b78"
              ref={inputCostHour}
              keyboardType="numeric"
            />
            <SeparatorForm>
              <IconFontAwesome5 name="calendar-alt" size={20} color="#979797" />
              <SeparatorTitle>Dados Horário</SeparatorTitle>
            </SeparatorForm>
            <ContainerCostHour />
          </Content>
          <ButtonGoBack onPress={() => handlePressBack(navigation)}>
            <ButtonGoBackGroup>
              <IconFontAwesome name="arrow-left" size={20} color="#fff" />
              <ButtonGoBackText>Voltar</ButtonGoBackText>
            </ButtonGoBackGroup>
          </ButtonGoBack>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GiveClasses;
