import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Avatar,
  GroupDataTop,
  GroupTop,
  Name,
  Subject,
  Description,
  GroupAvatarAndDataTop,
  GroupBottom,
  GroupPriceHour,
  PriceHourLabel,
  PriceHourText,
  ContainerTop,
  GroupButtons,
  LikeButton,
  WhatsappButton,
  WhatsappButtonText,
} from './styles';

interface IProps {
  avatarUrl?: string;
  name: string;
  matter: string;
  description: string;
  priceHour: string;
  liked?: boolean;
}

const Card: React.FC<IProps> = ({
  avatarUrl = undefined,
  description,
  matter,
  name,
  priceHour,
  liked = false,
}) => {
  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <ContainerTop>
        <GroupTop>
          <GroupAvatarAndDataTop>
            <Avatar source={{uri: avatarUrl}} />
            <GroupDataTop>
              <Name>{name}</Name>
              <Subject>{matter}</Subject>
            </GroupDataTop>
          </GroupAvatarAndDataTop>
        </GroupTop>
        <Description>{description}</Description>
      </ContainerTop>
      <GroupBottom>
        <GroupPriceHour>
          <PriceHourLabel>Preço/hora</PriceHourLabel>
          <PriceHourText>{`R$ ${priceHour}`}</PriceHourText>
        </GroupPriceHour>
        <GroupButtons>
          {liked ? (
            <LikeButton backgroundColor="#E33D3D">
              <IconFontAwesome name="heart" size={20} color="#fff" />
            </LikeButton>
          ) : (
            <LikeButton>
              <IconFontAwesome5 name="heart" size={20} color="#fff" />
            </LikeButton>
          )}

          <WhatsappButton>
            <IconFontAwesome name="whatsapp" size={20} color="#fff" />
            <WhatsappButtonText>Entrar em contato</WhatsappButtonText>
          </WhatsappButton>
        </GroupButtons>
      </GroupBottom>
    </Container>
  );
};

export default Card;
