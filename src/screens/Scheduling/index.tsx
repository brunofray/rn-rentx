import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';


import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueContainer,
  DateValue,
  Content,
  Footer,
} from './styles';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

export function Scheduling(){

  const theme = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton 
          onPress={() => {}}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={true}>
              <DateValue>15/06/2022</DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>

      </Content>

      <Footer>
        <Button title="Confirmar"/>
      </Footer>
      
    </Container>
  );
}