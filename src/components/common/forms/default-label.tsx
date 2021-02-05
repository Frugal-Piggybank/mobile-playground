import React from 'react';
import DefaultText from '../default-text';

import FormStyles from '../../../styles/form';
import TextStyles from '../../../styles/text';

interface DefaultLabelProps {
  label: string;
  labelStyles?: any[];
}

const DefaultLabel: React.FC<DefaultLabelProps> = ({ label, labelStyles }) => (
  <DefaultText
    textStyles={[FormStyles.label, TextStyles.hasTextWeightBold, labelStyles]}
  >
    {label}
  </DefaultText>
);

export default DefaultLabel;
