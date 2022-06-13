import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { LogBox } from 'react-native';
import { AppProvider } from './src/hooks';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import { Routes } from './src/routes';

import theme from './src/styles/theme';
import BrandSvg from './src/assets/brand.svg';

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.load}>
          <BrandSvg width={80} height={50} />
        </View>
      </ThemeProvider>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export const styles = StyleSheet.create({
  load: {
    flex: 1, 
    backgroundColor: theme.colors.header,
    justifyContent: 'center',
    alignItems: 'center',
  }
});