import { StyleSheet } from 'react-native';
import * as variables from './variables';

const FormStyles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 10,
    borderColor: variables.PLATINUM,
    color: variables.PLATINUM,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 20,
    textAlign: 'left',
    textTransform: 'uppercase',
  },
});

export default FormStyles;
