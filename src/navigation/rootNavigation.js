import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Local imports
import {Splash,Home} from '../screens';

import { AuthStack } from './AuthStack';


const StackApp = createNativeStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});




export const Navigation = () => {
 
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackApp.Navigator
          detachInactiveScreens={false}
          initialRouteName="Splash"
        >
          {/* Splah */}
          <StackApp.Screen
            name="Splash"
            component={Splash}
            options={navOptionHandler}
          />

           {/* Auth */}
           <StackApp.Screen
            name="AuthStack"
            component={AuthStack}
            options={navOptionHandler}
          />

           {/* Home */}
           <StackApp.Screen
            name="HomeApp"
            component={Home}
            options={navOptionHandler}
          />          
          
        </StackApp.Navigator>
      </NavigationContainer>
    </View>
  );
};