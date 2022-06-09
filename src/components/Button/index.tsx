import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
}

export function Button({
  title,
  ...rest
}: Props){
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}