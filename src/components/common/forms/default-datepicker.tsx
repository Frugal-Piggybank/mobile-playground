import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';

import { PLATINUM } from '../../../styles/variables';
import { getDisplayFormattedDate } from '../../../lib/helpers/datetime';
import DefaultText from '../default-text';
import FormStyles from '../../../styles/form';
import DefaultModal from '../default-modal';
import DefaultLabel from './default-label';

interface DefaultDatePickerProps {
  value: Date;
  onChange: (event: any, newDate: Date) => void;
}

const DefaultDatePicker: React.FC<DefaultDatePickerProps> = ({
  value,
  onChange,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <DefaultLabel label="Date" />
      <TouchableOpacity
        style={[FormStyles.textInput]}
        onPress={() => setShowPicker(true)}
      >
        <DefaultText>{getDisplayFormattedDate(value)}</DefaultText>
      </TouchableOpacity>
      <DefaultModal showModal={showPicker} onClose={() => setShowPicker(false)}>
        <DateTimePicker
          value={value}
          display="default"
          textColor={PLATINUM}
          onChange={onChange}
        />
      </DefaultModal>
    </>
  );
};

export default DefaultDatePicker;
