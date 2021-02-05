import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DefaultButton from '../common/default-button';
import GlobalStyles from '../../styles/global';
import TextStyles from '../../styles/text';
import DefaultText from '../common/default-text';
import { Screens } from '../../screens';
import DefaultLinkText from '../common/default-link-text';

const LineItemListFooter: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <DefaultButton
        title="Add +"
        buttonStyles={[GlobalStyles.isPrimary]}
        textStyles={[TextStyles.hasTextDark]}
        onPress={() => navigation.navigate(`${Screens.LineItem}`)}
      />

      <View style={styles.linkContainer}>
        <DefaultLinkText
          linkText="Reports"
          onPress={() => Alert.alert('Reports Screen')}
          textStyles={[TextStyles.hasTextSuccess, TextStyles.isUppercase]}
        />
        <DefaultText textStyles={[{ marginHorizontal: 10 }]}>|</DefaultText>
        <DefaultLinkText
          linkText="Categories"
          onPress={() => navigation.navigate(`${Screens.Categories}`)}
          textStyles={[TextStyles.hasTextLink, TextStyles.isUppercase]}
        />
      </View>
    </>
  );
};

export default LineItemListFooter;

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
