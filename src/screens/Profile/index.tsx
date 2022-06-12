import React, { useState } from 'react';
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
} from './styles';

export function Profile(){
  const [option, setOption] = useState<'dataEdit' | 'dataPassword'>('dataEdit');

  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = useAuth();

  function handleBack() {
    navigation.goBack();
  }

  function handleSignOut() {
  }

  function handleOptionChange(optionSelected: 'dataEdit' | 'dataPassword') {
    setOption(optionSelected);
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton 
                color={theme.colors.shape} 
                onPress={handleBack} 
              />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut}>
                <Feather 
                  name="power" 
                  size={24} 
                  color={theme.colors.shape} 
                />  
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              <Photo source={{ uri: 'https://github.com/brunofray.png' }} />
              <PhotoButton onPress={() => {}}>
                <Feather 
                  name="camera" 
                  size={24} 
                  color={theme.colors.shape} 
                />  
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option 
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <OptionTitle active={option === 'dataEdit'}>
                  Dados
                </OptionTitle>
              </Option>
              <Option 
                active={option === 'dataPassword'}
                onPress={() => handleOptionChange('dataPassword')}
              >
                <OptionTitle active={option === 'dataPassword'}>
                  Trocar senha
                </OptionTitle>
              </Option>
            </Options>
            {
              option === 'dataEdit' ?
              <Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCorrect={false}
                  defaultValue={user.name}
                  spaceBottom={8}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                  spaceBottom={8}
                />
                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                  spaceBottom={8}
                />
              </Section>
              :
              <Section>
                <PasswordInput
                  iconName="lock"
                  placeholder="Senha atual"
                  spaceBottom={8}
                />
                <PasswordInput
                  iconName="lock"
                  placeholder="Nova senha"
                  spaceBottom={8}
                />
                <PasswordInput
                  iconName="lock"
                  placeholder="Repetir senha"
                  spaceBottom={8}
                />
              </Section>
            }
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}