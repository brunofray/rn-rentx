import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';

import { UserDTO } from '../../../dtos/UserDTO';
import api from '../../../services/api';
interface Params {
  user: UserDTO;
}

export function SignUpSecondStep(){
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();

  const { user } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if ( !password || !passwordConfirm ) {
      return Alert.alert('Informe a senha e a confirmação');
    }

    if ( password !== passwordConfirm ) {
      return Alert.alert('As senhas não são iguais');
    }

    setLoading(true);

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        title: 'Conta criada!',
        message: `Agora é só fazer login\ne aproveitar.`,
        nextScreenRoute: 'SignIn',
      });
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      Alert.alert('Opa', 'Não foi possível cadastrar');
    });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack}/>
            <Steps>
              <Bullet />
              <Bullet active/>
            </Steps>
          </Header>

          <Title>
            Crie sua {'\n'}
            conta.
          </Title>
          <SubTitle>
            Faça seu cadastro de {'\n'}
            forma rápida e fácil.
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput 
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              spaceBottom={8}
            />
            <PasswordInput 
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button 
            title="Cadastrar"
            color= {theme.colors.success}
            onPress={handleRegister}
            enabled={!loading}
            loading={loading}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}