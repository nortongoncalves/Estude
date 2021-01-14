import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useReducer,
} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, ScrollView, Text} from 'react-native';
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
  BlockTerms,
  ContainerTerms,
  TextTerms,
  BoldTextTerms,
  ButtonSubmit,
  TextButtonSubmit,
  ContainerButton,
} from './styles';

import Form, {IFormHandles} from '../../contexts/Form';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';
import Dropdown, {IPropsOption} from '../../components/Dropdown';
import Input, {IInputHandles} from '../../components/Input';
import Schedules from '../../components/Schedules';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<IFormHandles>(null);
  const inputNameRef = useRef<IInputHandles>(null);
  const inputEmailRef = useRef<IInputHandles>(null);
  const inputAvatarRef = useRef<IInputHandles>(null);
  const inputWhatsappRef = useRef<IInputHandles>(null);
  const inputBioRef = useRef<IInputHandles>(null);
  const inputCostHour = useRef<IInputHandles>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [optionsMatter, setOptionsMatter] = useState<IPropsOption[] | null>(
    null,
  );

  const handlePressBack = useCallback(
    (navigate: NavigationProp<ParamListBase>) => {
      navigate.goBack();
    },
    [],
  );

  const handlePressTerms = useCallback(() => {
    setAcceptedTerms((oldValue) => !oldValue);
  }, []);

  const handlePressSubmitButton = useCallback((navigation, acceptedTerms) => {
    if (!acceptedTerms) {
      Alert.alert('Você deve aceitar o termo de uso');
      return;
    }
    formRef.current?.getFieldArray();
    // navigation.goBack();
  }, []);

  useEffect(() => {
    async function execute() {
      const options: IPropsOption[] = [
        {label: 'Selecione a Matéria', value: 0},
      ];

      const matters = await AsyncStorage.getItem('@Estude:Matters');
      if (matters) {
        const parsedMatters: IPropsOption[] = JSON.parse(matters);
        parsedMatters.forEach((matter) => {
          options.push({
            label: matter.label,
            value: matter.value,
          });
        });
      }
      setOptionsMatter(options);
    }

    execute();
  }, []);

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
          <Form ref={formRef}>
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
                name="name"
                placeholder="Nome Completo"
                returnKeyType="next"
                autoCorrect={false}
                ref={inputNameRef}
                onSubmitEditing={() => inputEmailRef.current?.focus()}
                borderColorFocus="#1f9b78"
                color="#1f9b78"
              />
              <Input
                name="email"
                placeholder="Email (para contato)"
                returnKeyType="next"
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                autoCorrect={false}
                ref={inputEmailRef}
                onSubmitEditing={() => inputAvatarRef.current?.focus()}
                borderColorFocus="#1f9b78"
                color="#1f9b78"
              />
              <Input
                name="avatarLink"
                placeholder="Link de uma foto sua (comece com: https://)"
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                mask="link"
                ref={inputAvatarRef}
                onSubmitEditing={() => inputWhatsappRef.current?.focus()}
                borderColorFocus="#1f9b78"
                color="#1f9b78"
              />
              <Input
                name="whatsapp"
                placeholder="Whatsapp (para contato)"
                returnKeyType="next"
                autoCorrect={false}
                ref={inputWhatsappRef}
                mask="phone"
                maxLength={15}
                onSubmitEditing={() => inputBioRef.current?.focus()}
                keyboardType="numeric"
                borderColorFocus="#1f9b78"
                color="#1f9b78"
              />
              <Input
                name="bio"
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
              {optionsMatter && (
                <Dropdown
                  options={optionsMatter}
                  backgroundColor="#e5e5e5"
                  border="2px solid #c8c8c9"
                  marginBottom="15px"
                  color="#27b990"
                />
              )}
              <Input
                name="cost"
                placeholder="Custo da sua aula (custo por hora em R$)"
                autoCorrect={false}
                mask="money"
                maxLength={9}
                defaultValue="R$ 0,00"
                multiline
                borderColorFocus="#1f9b78"
                color="#1f9b78"
                ref={inputCostHour}
                keyboardType="numeric"
              />
              <SeparatorForm>
                <IconFontAwesome5
                  name="calendar-alt"
                  size={20}
                  color="#979797"
                />
                <SeparatorTitle>Dados Horário</SeparatorTitle>
              </SeparatorForm>
              <Schedules />
            </Content>
            <ContainerTerms
              onPress={handlePressTerms}
              backgroundColor={acceptedTerms ? '#B3E8BB' : '#ffcbcb'}>
              <TextTerms color={acceptedTerms ? '#22772A' : '#FC0606'}>
                <Text>Selecionando essa checkbox você </Text>
                <BoldTextTerms>concorda </BoldTextTerms>
                <Text>que os </Text>
                <BoldTextTerms>dados fornecidos </BoldTextTerms>
                <Text>por </Text>
                <BoldTextTerms>você </BoldTextTerms>
                <Text>nesse formulário pode ser </Text>
                <BoldTextTerms>exposto </BoldTextTerms>
                <Text>a qualquer pessoa que acessar o aplicativo. </Text>
              </TextTerms>
              <BlockTerms
                backgroundColor={acceptedTerms ? '#22772A' : ''}
                borderColor={acceptedTerms ? '#22772A' : '#FC0606'}
              />
            </ContainerTerms>
            <ContainerButton>
              <ButtonSubmit
                onPress={() => {
                  handlePressSubmitButton(navigation, acceptedTerms);
                }}>
                <TextButtonSubmit>Cadastrar-se</TextButtonSubmit>
              </ButtonSubmit>
            </ContainerButton>
          </Form>
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
