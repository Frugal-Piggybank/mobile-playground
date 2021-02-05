import React from 'react';
import { Text, TextProps } from 'react-native';

import TextStyles from '../../styles/text';

interface DefaultTextProps extends TextProps {
  textStyles?: any[];
}

const DefaultText: React.FC<DefaultTextProps> = ({
  textStyles,
  onPress,
  children,
}) => (
  <Text style={[TextStyles.body, textStyles]} onPress={onPress}>
    {children}
  </Text>
);

export default DefaultText;
