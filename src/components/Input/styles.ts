import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  spaceBottom?: number;
}
interface IsFocusedProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  ${({ spaceBottom }) => spaceBottom && css`
    margin-bottom: ${spaceBottom}px;
  `};
`;

export const IconContainer = styled.View<IsFocusedProps>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;
  border-bottom-width: 2px;
  border-bottom-color: transparent;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  
  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-color: ${theme.colors.main};
  `};
`;

export const InputText = styled(TextInput)<IsFocusedProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `};
`;