import React from 'react';
import { View, Text } from 'react-native';
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

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
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
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Carregando...</Text></View>
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  )
}