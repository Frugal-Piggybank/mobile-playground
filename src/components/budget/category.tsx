import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useMutation } from 'react-apollo';

import CategoryModel from '../../interfaces/category';
import DefaultText from '../common/default-text';
import TextStyles from '../../styles/text';
import ListStyles from '../../styles/list';
import { RUBY_RED } from '../../styles/variables';
import { DELETE_CATEGORY } from '../../lib/graphql/mutations';
import DefaultModal from '../common/default-modal';
import DefaultButton from '../common/default-button';
import GlobalStyles from '../../styles/global';

interface CategoryProps {
  category: CategoryModel;
  refetch: (variables?: Record<string, any>) => Promise<any>;
}

const Category: React.FC<CategoryProps> = ({ category, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  const handleDelete = async (id: string) => {
    await deleteCategory({ variables: { id: category._id } });
    await refetch();
  };

  return (
    <View style={ListStyles.listItem}>
      <DefaultText textStyles={[TextStyles.hasTextWeightBold]}>
        {category.name}
      </DefaultText>
      <TouchableHighlight onPress={() => setShowModal(true)}>
        <Feather name="trash-2" size={24} color={RUBY_RED} />
      </TouchableHighlight>

      <DefaultModal onClose={() => setShowModal(false)} showModal={showModal}>
        <DefaultText textStyles={[styles.modalText]}>
          Are you sure you want to delete this category?
        </DefaultText>
        <DefaultButton
          onPress={() => handleDelete(category._id)}
          title="Delete"
          buttonStyles={[GlobalStyles.isDanger]}
        />
      </DefaultModal>
    </View>
  );
};
export default Category;

const styles = StyleSheet.create({
  modalText: {
    alignSelf: 'center',
  },
});
