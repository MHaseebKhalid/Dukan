import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SignIn,SignUp
} from '../screens/auth';

const StackAuth = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

export const AuthStack = () => {
  return (
    <StackAuth.Navigator initialRouteName="SignIn">
      <StackAuth.Screen
        name="SignIn"
        component={SignIn}
        options={navOptionHandler}
      />
      <StackAuth.Screen
        name="SignUp"
        component={SignUp}
        options={navOptionHandler}
      />
     
    </StackAuth.Navigator>
  );
};