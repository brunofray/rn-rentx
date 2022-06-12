import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

import { ConfirmationParams } from '../screens/Confirmation';
import { CarDTO } from "../dtos/CarDTO";
import { UserDTO } from "../dtos/UserDTO";

export type AppRoutes = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: { user: UserDTO};
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { 
    car: CarDTO;
    dates: string[];
  };
  Confirmation: ConfirmationParams;
  MyCars: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes{}
  }
}

export function Routes(){
  const { user } = useAuth();

  return (
    <NavigationContainer>
      { user.id ? <AppTabRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}