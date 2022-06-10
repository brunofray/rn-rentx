import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer,
  SpaceBottom,
} from './styles';

export function SignIn(){

  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Title>
          Estamos {'\n'}
          quase lá.
        </Title>
        <SubTitle>
          Faça seu login para começar {'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input 
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input 
          iconName="lock"
          placeholder="Senha"
        />
      </Form>

      <Footer>
        <Button
          title="Login"
          onPress={() =>{}}
          enabled={true}
          loading={false}
        />
        <SpaceBottom marginBottom={8} />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          onPress={() =>{}}
          enabled={true}
          loading={false}
          light
        />
      </Footer>
    </Container>
  );
}