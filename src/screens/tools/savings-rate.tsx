import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';

import SavingsRate, { NewSavingsRate } from '../../interfaces/savings-rate';
import DefaultText from '../../components/common/default-text';
import DefaultTextInput from '../../components/common/forms/default-text-input';
import DefaultButton from '../../components/common/default-button';
import { PLATINUM, CHARLESTON_GREEN } from '../../styles/variables';
import TextStyles from '../../styles/text';
import GlobalStyles from '../../styles/global';

const SavingsRateScreen: React.FC = () => {
  const [savingsRate, setSavingsRate] = useState<SavingsRate>(NewSavingsRate);

  const handleChange = (name: string, value: string) => {
    setSavingsRate((prevRate) => ({
      ...prevRate,
      [name]: parseFloat(value) || 0,
    }));
  };

  const calculateSavingsRate = () => {
    const {
      preTaxContributions,
      afterTaxContributions,
      takeHomePay,
    } = savingsRate;

    const total =
      (preTaxContributions + afterTaxContributions) /
      (takeHomePay + preTaxContributions);

    const roundedPercentage = Math.round(total * 100);

    setSavingsRate((prevRate) => ({
      ...prevRate,
      total: roundedPercentage || 0,
    }));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.savingsRateContainer}>
        <DefaultTextInput
          name="takeHomePay"
          value={`${savingsRate.takeHomePay}`}
          onChangeText={handleChange}
          label="Take Home Pay"
          keyBoardType="numeric"
        />

        <DefaultTextInput
          name="preTaxContributions"
          value={`${savingsRate.preTaxContributions}`}
          onChangeText={handleChange}
          label="Pre Tax Contributions"
          keyBoardType="numeric"
        />

        <DefaultTextInput
          name="afterTaxContributions"
          value={`${savingsRate.afterTaxContributions}`}
          onChangeText={handleChange}
          label="After Tax Contributions"
          keyBoardType="numeric"
        />

        <View style={styles.resultsContainer}>
          <DefaultButton
            title="Calculate"
            onPress={calculateSavingsRate}
            buttonStyles={[GlobalStyles.isSuccess]}
            textStyles={[TextStyles.hasTextWeightBold, TextStyles.isUppercase]}
          />

          <DefaultText textStyles={[TextStyles.heading, styles.savingsRate]}>
            Savings Rate:{' '}
            <DefaultText
              textStyles={[TextStyles.hasTextWeightBold, styles.savingsRate]}
            >
              {savingsRate.total}%
            </DefaultText>
          </DefaultText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SavingsRateScreen;

const styles = StyleSheet.create({
  savingsRateContainer: {
    flex: 1,
    backgroundColor: CHARLESTON_GREEN,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  resultsContainer: {
    alignItems: 'center',
  },
  button: {
    borderColor: PLATINUM,
  },
  savingsRate: {
    fontSize: 18,
    fontWeight: '100',
  },
});
