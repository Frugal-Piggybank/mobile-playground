import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useMutation } from 'react-apollo';

import DefaultModal from '../common/default-modal';
import DefaultTextInput from '../common/forms/default-text-input';
import { PLATINUM, CHARLESTON_GREEN } from '../../styles/variables';
import TextStyles from '../../styles/text';
import GlobalStyles from '../../styles/global';
import DefaultButton from '../common/default-button';
import { CREATE_CATEGORY } from '../../lib/graphql/mutations';
import CategoryModel, { NewCategory } from '../../interfaces/category';

interface ManageCategoryModalProps {
  id?: string;
  isVisible: boolean;
  onClose: () => void;
  refetch: (variables?: Record<string, any>) => Promise<any>;
}

const ManageCategoryModal: React.FC<ManageCategoryModalProps> = ({
  isVisible,
  onClose,
  refetch,
}) => {
  const [category, setCategory] = useState<CategoryModel>(NewCategory);
  const [saveCategory] = useMutation(CREATE_CATEGORY);

  const handleCategoryChange = (name: string, value: string) => {
    setCategory((cat) => ({
      ...cat,
      name: value,
    }));
  };

  const handleSave = async () => {
    if (!category.name) {
      Alert.alert('Category must have a name');
      return;
    }

    await saveCategory({
      variables: { category },
    });

    setCategory(NewCategory);

    await refetch();

    onClose();
  };

  return (
    <View>
      <DefaultModal
        showModal={isVisible}
        onClose={() => onClose()}
        modalStyles={[styles.modalContainer]}
        closeStyles={[TextStyles.hasTextDark]}
        headerText="Add new category"
        headerStyles={[GlobalStyles.isLink]}
        headerTextStyles={[
          TextStyles.hasTextWeightBold,
          TextStyles.hasTextDark,
        ]}
      >
        <View style={styles.modalContent}>
          <DefaultTextInput
            label="Category Name"
            labelStyles={[TextStyles.hasTextDark]}
            name="name"
            value={category.name}
            onChangeText={(name, value) => handleCategoryChange(name, value)}
            placeholder="New Category"
            placeholderTextColor={CHARLESTON_GREEN}
            textStyles={[TextStyles.hasTextDark, styles.textInput]}
          />
          <DefaultButton
            title="Save"
            buttonStyles={[GlobalStyles.isSuccess]}
            textStyles={[TextStyles.isUppercase, TextStyles.hasTextWeightBold]}
            onPress={() => handleSave()}
          />
        </View>
      </DefaultModal>
    </View>
  );
};

export default ManageCategoryModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: PLATINUM,
    width: '80%',
    bottom: 'auto',
    top: '30%',
    left: '10%',
  },
  modalContent: {
    paddingHorizontal: 20,
  },
  textInput: {
    borderColor: CHARLESTON_GREEN,
  },
});
