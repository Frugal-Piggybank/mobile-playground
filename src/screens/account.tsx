import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { useFirebase } from '@Frugal-Piggybank/playground-client-sdk';
import { Screens } from '.';
import Login from './login';
import Register from './register';
import Layout from '../components/layout';
import DefaultText from '../components/common/default-text';
import DefaultButton from '../components/common/default-button';
import GlobalStyles from '../styles/global';

const AccountStack = createStackNavigator();

const AccountScreen: React.FC = () => {
  const { currentUser, logoutAsync } = useFirebase();

  return currentUser ? (
    <Layout>
      <View>
        <DefaultText>
          Welcome
          {currentUser.email}
        </DefaultText>
        <DefaultButton
          title="Logout"
          onPress={logoutAsync}
          buttonStyles={[GlobalStyles.isDanger]}
        />
      </View>
    </Layout>
  ) : (
    <AccountStack.Navigator headerMode="none">
      <AccountStack.Screen name={`${Screens.Login}`} component={Login} />
      <AccountStack.Screen name={`${Screens.Register}`} component={Register} />
    </AccountStack.Navigator>
  );
};

export default AccountScreen;
