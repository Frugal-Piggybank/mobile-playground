import React, { useEffect, useState } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import DefaultText from '../common/default-text';
import TextStyles from '../../styles/text';
import { monthNames } from '../../lib/helpers/datetime';

interface MonthSelectorProps {
  onPressNext: (event: GestureResponderEvent) => void;
  onPressPrev: (event: GestureResponderEvent) => void;
  selectedMonth: number;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  onPressNext,
  onPressPrev,
  selectedMonth,
}) => {
  const [monthName, setMonthName] = useState(monthNames[selectedMonth]);

  useEffect(() => {
    setMonthName(monthNames[selectedMonth]);
  }, [selectedMonth]);

  return (
    <>
      <DefaultText textStyles={[styles.subtext]}>
        Tap the arrows below to select a different month
      </DefaultText>
      <View style={styles.container}>
        <TouchableOpacity disabled={selectedMonth <= 1} onPress={onPressPrev}>
          <Feather
            name="chevron-left"
            style={[TextStyles.hasTextPrimary, styles.subhead]}
            size={16}
          />
        </TouchableOpacity>
        <DefaultText
          textStyles={[
            TextStyles.hasTextLink,
            TextStyles.hasTextWeightBold,
            styles.subhead,
          ]}
        >
          {monthName}
        </DefaultText>
        <TouchableOpacity disabled={selectedMonth >= 12} onPress={onPressNext}>
          <Feather
            name="chevron-right"
            style={[TextStyles.hasTextPrimary, styles.subhead]}
            size={16}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MonthSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  subhead: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  subtext: {
    fontSize: 12,
    marginBottom: 5,
  },
});
