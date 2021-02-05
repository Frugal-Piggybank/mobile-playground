import React from 'react';

import DefaultTextInput from './common/forms/default-text-input';

interface AccountFormProps {
  email: string;
  password: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
}

const AccountForm: React.FC<AccountFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
}) => (
  <>
    <DefaultTextInput
      name="email"
      value={email}
      placeholder="Email"
      onChangeText={(name, value) => onEmailChange(value)}
      keyBoardType="email-address"
      autoCapitalize="none"
    />
    <DefaultTextInput
      name="email"
      value={password}
      placeholder="Password"
      onChangeText={(name, value) => onPasswordChange(value)}
      isPassword
      autoCapitalize="none"
    />
  </>
);

export default AccountForm;
