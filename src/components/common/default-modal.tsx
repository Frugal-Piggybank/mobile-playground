import React from 'react';
import { Modal, View, TouchableOpacity, StyleSheet } from 'react-native';

import GlobalStyles from '../../styles/global';
import DefaultText from './default-text';
import TextStyles from '../../styles/text';

interface DefaultModalProps {
  showModal: boolean;
  closeText?: string;
  headerText?: string;
  modalStyles?: any[];
  closeStyles?: any[];
  headerStyles?: any[];
  headerTextStyles?: any[];
  onClose: () => void;
}

const DefaultModal: React.FC<DefaultModalProps> = ({
  children,
  showModal,
  closeText = 'Close',
  headerText,
  modalStyles,
  closeStyles,
  headerStyles,
  headerTextStyles,
  onClose,
}) => (
  <Modal animationType="slide" transparent visible={showModal}>
    <View style={[GlobalStyles.modal, modalStyles]}>
      <View style={[styles.headerContainer, headerStyles]}>
        {headerText && (
          <DefaultText textStyles={[headerTextStyles, styles.headerText]}>
            {headerText}
          </DefaultText>
        )}
        <TouchableOpacity onPress={onClose}>
          <DefaultText textStyles={[TextStyles.hasTextLink, closeStyles]}>
            {closeText}
          </DefaultText>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  </Modal>
);

export default DefaultModal;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  headerText: {
    marginRight: 25,
  },
});
