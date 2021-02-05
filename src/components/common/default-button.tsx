import React, { useEffect, useRef } from 'react';
import { ButtonProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import GlobalStyles from '../../styles/global';
import DefaultText from './default-text';

interface DefaultButtonProps extends ButtonProps {
  buttonStyles?: any[];
  textStyles?: any[];
  disabled?: boolean;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  title,
  onPress,
  buttonStyles,
  textStyles,
  disabled = false,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const opacity = disabled ? 0.5 : 1;

    ref.current.setOpacityTo(opacity, 0);
  }, [disabled]);

  return (
    <TouchableOpacity
      ref={ref}
      disabled={disabled}
      onPress={onPress}
      style={[GlobalStyles.button, buttonStyles]}
    >
      <DefaultText textStyles={textStyles}>{title}</DefaultText>
    </TouchableOpacity>
  );
};

export default DefaultButton;
