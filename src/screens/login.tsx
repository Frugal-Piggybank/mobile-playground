import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useFirebase } from '@Frugal-Piggybank/playground-client-sdk';
import { Screens } from '.';
import Layout from '../components/layout';
import DefaultText from '../components/common/default-text';
import DefaultHeading from '../components/common/default-heading';
import AccountForm from '../components/account-form';
import DefaultButton from '../components/common/default-button';
import GlobalStyles from '../styles/global';
import TextStyles from '../styles/text';

const LoginScreen: React.FC = () => {
  const { loginAsync } = useFirebase();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (usrEmail: string, usrPassword: string) => {
    setLoading(true);

    if (usrEmail === '' || usrPassword === '') {
      setLoading(false);
      Alert.alert('Email and password field cannot be empty');
      return;
    }

    try {
      await loginAsync(usrEmail, usrPassword);
    } catch (e) {
      Alert.alert(
        'Could not log in, please check email and password and try again.'
      );
      setLoading(false);
    }
  };

  return (
    <Layout>
      <DefaultHeading>Login</DefaultHeading>

      <AccountForm
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
      />

      <DefaultButton
        title="Login"
        onPress={async () => await handleLogin(email, password)}
        buttonStyles={[GlobalStyles.isLink]}
        textStyles={[TextStyles.hasTextDark]}
        disabled={loading}
      />

      <DefaultText>Don&apos;t have an account?</DefaultText>
      <DefaultText
        textStyles={[
          TextStyles.hasTextLink,
          TextStyles.hasTextWeightBold,
          { textTransform: 'uppercase' },
        ]}
        onPress={() => navigation.navigate(`${Screens.Register}`)}
      >
        Create one
      </DefaultText>
    </Layout>
  );
};

export default LoginScreen;
