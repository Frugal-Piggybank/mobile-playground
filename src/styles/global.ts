import { StyleSheet } from 'react-native';
import * as variables from './variables';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.CHARLESTON_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  button: {
    height: 50,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    borderRadius: 4,
  },
  modal: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    backgroundColor: variables.CHARLESTON_GREEN,
  },
  isPrimary: {
    backgroundColor: variables.PLATINUM,
  },
  isDanger: {
    backgroundColor: variables.RUBY_RED,
  },
  isSuccess: {
    backgroundColor: variables.SUCCESS,
  },
  isLink: {
    backgroundColor: variables.DARK_SKY_BLUE,
  },
});

export default GlobalStyles;
