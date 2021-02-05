import React, { useState } from 'react';
import { Picker, TouchableOpacity, StyleSheet } from 'react-native';

import DefaultText from '../default-text';
import FormStyles from '../../../styles/form';
import { PLATINUM } from '../../../styles/variables';
import DefaultModal from '../default-modal';
import DefaultLabel from './default-label';

interface SelectOption {
  label: string;
  value: string;
}

interface DefaultSelectInputProps {
  label: string;
  items: SelectOption[];
  selectedLabel?: string;
  selectedValue: any;
  onChange: (itemValue: any, itemPosition: number) => void;
}

const DefaultSelectInput: React.FC<DefaultSelectInputProps> = ({
  label,
  items,
  selectedLabel,
  selectedValue,
  onChange,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <DefaultLabel label={label} />
      <TouchableOpacity
        style={[FormStyles.textInput]}
        onPress={() => setShowPicker(true)}
      >
        <DefaultText>{selectedLabel || selectedValue}</DefaultText>
      </TouchableOpacity>

      <DefaultModal showModal={showPicker} onClose={() => setShowPicker(false)}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onChange}
          itemStyle={styles.item}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </DefaultModal>
    </>
  );
};

export default DefaultSelectInput;

const styles = StyleSheet.create({
  item: {
    color: PLATINUM,
  },
});
