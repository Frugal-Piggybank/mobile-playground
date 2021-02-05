import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { Screens } from '..';
import Layout from '../../components/layout';
import DefaultButton from '../../components/common/default-button';
import GlobalStyles from '../../styles/global';
import TextStyles from '../../styles/text';

const ToolsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <DefaultButton
        title="Create a Budget"
        onPress={() => {
          navigation.navigate(`${Screens.Budget}`);
        }}
        buttonStyles={[GlobalStyles.isPrimary, styles.button]}
        textStyles={[TextStyles.hasTextDark]}
      />
      <DefaultButton
        title="Calculate Savings Rate"
        onPress={() => {
          navigation.navigate(`${Screens.SavingsRate}`);
        }}
        buttonStyles={[GlobalStyles.isPrimary, styles.button]}
        textStyles={[TextStyles.hasTextDark]}
      />
    </Layout>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  button: {
    width: 300,
    marginVertical: 10,
  },
});
