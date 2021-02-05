import React from 'react';
import { SafeAreaView } from 'react-native';

import GlobalStyles from '../../../styles/global';
import CategoriesList from '../../../components/budget/categories-list';

const CategoriesScreen: React.FC = () => (
  <SafeAreaView style={[GlobalStyles.container]}>
    <CategoriesList />
  </SafeAreaView>
);

export default CategoriesScreen;
