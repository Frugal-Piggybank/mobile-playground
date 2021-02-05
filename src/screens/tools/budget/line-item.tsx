import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import DefaultHeading from '../../../components/common/default-heading';
import LineItemModel from '../../../interfaces/line-item';
import LineItemForm from '../../../components/budget/line-item-form';
import GlobalStyles from '../../../styles/global';

interface LineItemScreenProps {
  route: {
    params: {
      lineItem?: LineItemModel;
    };
  };
}

const LineItemScreen: React.FC<LineItemScreenProps> = ({ route }) => {
  const { lineItem } = route.params || {};

  return (
    <SafeAreaView style={[GlobalStyles.container]}>
      <DefaultHeading>{lineItem?._id ? 'Edit' : 'Add'} Budget</DefaultHeading>
      <ScrollView>
        <LineItemForm item={lineItem} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LineItemScreen;
