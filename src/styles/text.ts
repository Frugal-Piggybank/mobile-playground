import { StyleSheet } from 'react-native';
import * as variables from './variables';

const TextStyles = StyleSheet.create({
  heading: {
    fontFamily: variables.FONT_HEADING,
    color: variables.COOL_GREY,
  },
  body: {
    color: variables.PLATINUM,
    fontFamily: variables.FONT_SANS_SERIF,
    fontSize: 16,
  },
  title: {
    fontSize: 48,
  },
  hasTextWeightBold: {
    fontFamily: variables.FONT_SANS_SERIF_BOLD,
  },
  hasTextPrimary: {
    color: variables.PLATINUM,
  },
  hasTextLink: {
    color: variables.DARK_SKY_BLUE,
  },
  hasTextSuccess: {
    color: variables.SUCCESS,
  },
  hasTextDark: {
    color: variables.CHARLESTON_GREEN,
  },
  hasTextDanger: {
    color: variables.INDIAN_RED,
  },
  isUppercase: {
    textTransform: 'uppercase',
  },
  isLowercase: {
    textTransform: 'lowercase',
  },
  isCapitalized: {
    textTransform: 'capitalize',
  },
});

export default TextStyles;
