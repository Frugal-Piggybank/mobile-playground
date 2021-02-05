import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider } from 'react-apollo';
import { Feather } from '@expo/vector-icons';
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { BreeSerif_400Regular } from '@expo-google-fonts/bree-serif';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

import graphqlClient from './src/lib/graphql/client';
import { FirebaseProvider } from '@Frugal-Piggybank/playground-client-sdk';
import { Screens } from './src/screens';
import HomeScreen from './src/screens/home';
import AccountScreen from './src/screens/account';
import ToolsStackScreen from './src/screens/tools/tools-stack';
import firebaseConfig from './firebase-config';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
    BreeSerif_400Regular,
    Lobster_400Regular,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <ApolloProvider client={graphqlClient}>
      <FirebaseProvider defaultMessage="" config={firebaseConfig}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name={`${Screens.Home}`}
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Feather name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name={`${Screens.Tools}`}
              component={ToolsStackScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Feather name="dollar-sign" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name={`${Screens.Account}`}
              component={AccountScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Feather name="user" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </FirebaseProvider>
    </ApolloProvider>
  );
}
