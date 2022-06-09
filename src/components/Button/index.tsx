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
}

export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  ...rest
}: Props){
  const theme = useTheme();
  const containerProps = {
    color: color || theme.colors.main,
    enabled: enabled,
    loading: loading,
  }

  return (
    <Container {...containerProps} {...rest}>
      {
        loading ? (
          <ActivityIndicator color={theme.colors.shape} />
        ) : (
          <Title>{title}</Title>
        )
      }
    </Container>
  );
}