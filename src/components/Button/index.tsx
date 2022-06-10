import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
  Container,
  Title,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
  spaceBottom?: number;
}

export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  light = false,
  spaceBottom,
  ...rest
}: Props){
  const theme = useTheme();
  const containerProps = {
    color: color || theme.colors.main,
    enabled,
    loading,
    spaceBottom,
  }

  return (
    <Container {...containerProps} {...rest}>
      {
        loading ? (
          <ActivityIndicator color={theme.colors.shape} />
        ) : (
          <Title light={light}>{title}</Title>
        )
      }
    </Container>
  );
}