import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

import { ConfirmationParams } from '../screens/Confirmation';
import { Car as ModelCar } from '../database/model/Car';
import { UserDTO } from "../dtos/UserDTO";
import { LoadAnimation } from '../components/LoadAnimation';

export type AppRoutes = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: { user: UserDTO};
  Home: undefined;
  CarDetails: { car: ModelCar };
  Scheduling: { car: ModelCar };
  SchedulingDetails: { 
    car: ModelCar;
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
  const { user, loading } = useAuth();

  return (
    loading ? <LoadAnimation /> :
    <NavigationContainer>
      { user.id ? <AppTabRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}