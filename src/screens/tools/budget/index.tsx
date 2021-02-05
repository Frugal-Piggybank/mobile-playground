import React from 'react';
import { SafeAreaView } from 'react-native';

import LineItemList from '../../../components/budget/line-item-list';
import GlobalStyles from '../../../styles/global';

const BudgetScreen: React.FC = () => (
  <SafeAreaView style={[GlobalStyles.container]}>
    <LineItemList />
  </SafeAreaView>
);

export default BudgetScreen;
