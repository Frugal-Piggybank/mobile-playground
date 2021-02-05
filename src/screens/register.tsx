import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useFirebase } from '@Frugal-Piggybank/playground-client-sdk';
import Layout from '../components/layout';
import DefaultText from '../components/common/default-text';
import DefaultButton from '../components/common/default-button';
import AccountForm from '../components/account-form';
import GlobalStyles from '../styles/global';
import TextStyles from '../styles/text';
import DefaultHeading from '../components/common/default-heading';

const Register: React.FC = () => {
  const { registerAsync } = useFirebase();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (usrEmail: string, usrPassword: string) => {
    setLoading(true);

    if (usrEmail === '' || usrPassword === '') {
      setLoading(false);
      Alert.alert('Email and password field cannot be empty');
      return;
    }

    try {
      await registerAsync(usrEmail, usrPassword);
    } catch (e) {
      Alert.alert('Could not create account. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Layout>
      <DefaultHeading>Register</DefaultHeading>

      <AccountForm
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
      />

      <DefaultButton
        title="Register"
        onPress={async () => await handleRegistration(email, password)}
        buttonStyles={[GlobalStyles.isLink]}
        textStyles={[TextStyles.hasTextDark]}
        disabled={loading}
      />

      <DefaultText>Already have an account?</DefaultText>
      <DefaultText
        onPress={() => navigation.goBack()}
        textStyles={[
          TextStyles.hasTextLink,
          TextStyles.hasTextWeightBold,
          { textTransform: 'uppercase' },
        ]}
      >
        Login
      </DefaultText>
    </Layout>
  );
};

export default Register;
