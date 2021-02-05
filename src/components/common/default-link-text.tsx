import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';

import DefaultText from './default-text';
import TextStyles from '../../styles/text';

interface DefaultLinkTextProps {
  onPress: (event: GestureResponderEvent) => void;
  linkText: string;
  textStyles?: any[];
}

const DefaultLinkText: React.FC<DefaultLinkTextProps> = ({
  onPress,
  linkText,
  textStyles,
}) => (
  <TouchableOpacity onPress={onPress}>
    <DefaultText textStyles={[TextStyles.hasTextLink, textStyles]}>
      {linkText}
    </DefaultText>
  </TouchableOpacity>
);

export default DefaultLinkText;
