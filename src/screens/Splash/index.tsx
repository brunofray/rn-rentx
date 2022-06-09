import React from 'react';
import { Button, StyleSheet, View, Dimensions } from 'react-native';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

import {
  Container,
} from './styles';

export function Splash(){
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { 
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(0,1.06,1,-0.13) // cubic-bezier.com
          }) 
        }
      ]
    }
  });

  function handleAnimationPosition() {
    animation.value = Math.random() * (WIDTH - 100);
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]}/>
      <View style={{ backgroundColor: 'yellow'}}>
        <Button title="Mover" onPress={handleAnimationPosition} />
      </View>
    </Container>
  );
}

export const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});