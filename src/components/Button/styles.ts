import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  spaceBottom?: number;
}

interface ButtonTextProps {
  light?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) =>
  color ? color : theme.colors.main};

  opacity: ${({ enabled, loading }) => (loading || !enabled) ? .5 : 1};

  ${({ spaceBottom }) => spaceBottom && css`
    margin-bottom: ${spaceBottom}px;
  `};
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
  light ? theme.colors.header : theme.colors.shape};
`;