import React from 'react';
import { View, StyleSheet } from 'react-native';

import DefaultHeading from '../common/default-heading';
import MonthSelector from './month-selector';
import GlobalStyles from '../../styles/global';

interface LineItemListHeaderProps {
  selectedMonth: number;
  selectedYear: number;
  onPressNext: () => void;
  onPressPrev: () => void;
}

const LineItemListHeader: React.FC<LineItemListHeaderProps> = ({
  selectedMonth,
  selectedYear,
  onPressNext,
  onPressPrev,
}) => (
  <View style={[GlobalStyles.container, styles.headerContainer]}>
    <DefaultHeading>{selectedYear} Budget</DefaultHeading>
    <MonthSelector
      selectedMonth={selectedMonth}
      onPressNext={onPressNext}
      onPressPrev={onPressPrev}
    />
  </View>
);

export default LineItemListHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 50,
  },
});
