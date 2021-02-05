import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { Alert, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GET_CATEGORIES } from '../../lib/graphql/queries';
import { UPSERT_LINE_ITEM } from '../../lib/graphql/mutations';
import LineItemModel, { NewLineItem } from '../../interfaces/line-item';
import DefaultTextInput from '../common/forms/default-text-input';
import DefaultDatePicker from '../common/forms/default-datepicker';
import DefaultSelectInput from '../common/forms/default-select-input';
import DefaultButton from '../common/default-button';
import CategoryModel, { NewCategory } from '../../interfaces/category';
import { nameof } from '../../lib/helpers/generic';
import GlobalStyles from '../../styles/global';
import { Screens } from '../../screens';
import TextStyles from '../../styles/text';

interface LineItemFormProps {
  item?: LineItemModel;
}

const LineItemForm: React.FC<LineItemFormProps> = ({ item = NewLineItem }) => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  const [saveLineItem] = useMutation(UPSERT_LINE_ITEM);
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<CategoryModel>(
    NewCategory
  );
  const [lineItem, setLineItem] = useState({
    ...item,
    category: item.category?._id,
  });
  const [errors, setErrors] = useState({});

  const formIsValid = (): boolean => {
    const { title, amount, date, isSavings } = lineItem;
    const formErrors: any = {};

    if (!title) formErrors.title = 'Title is required';
    if (!amount) formErrors.amount = 'Amount is required';
    if (!date) formErrors.date = 'Please select a date';
    if (isSavings === undefined) {
      formErrors.type = 'Please choose an entry type';
    }

    setErrors(formErrors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (name: string, value: any) => {
    let newVal = value;

    switch (typeof lineItem[name]) {
      case 'number':
        newVal = parseFloat(value) || 0;
        break;
      case 'boolean':
        newVal = value === 'true';
        break;
      default:
        break;
    }

    setLineItem((prevLineItem) => ({
      ...prevLineItem,
      [name]: newVal,
    }));
  };

  const handleSave = async () => {
    if (!formIsValid()) {
      Alert.alert(errors[Object.keys(errors)[0]]);
      return;
    }

    try {
      await saveLineItem({
        variables: {
          lineItem,
        },
      });
      navigation.navigate(`${Screens.Budget}`);
    } catch (err) {
      setErrors({
        onSave:
          'Could not save line item. Please review the form below or try again later.',
      });
    }
  };

  const getCategoryById = (id: string): CategoryModel =>
    data.categories.find((cat: CategoryModel) => cat._id === id);

  const handleCategoryChange = (id: string) => {
    const { _id } = getCategoryById(id);

    handleChange(nameof<LineItemModel>('category'), _id);
  };

  const handleDateChange = (event: any, date: Date) =>
    handleChange(nameof<LineItemModel>('date'), date);

  useEffect(() => {
    if (!loading && lineItem.category) {
      setSelectedCategory(getCategoryById(lineItem.category));
    }
  }, [loading, lineItem]);

  return (
    !loading && (
      <>
        <DefaultTextInput
          name="title"
          label="Title"
          onChangeText={handleChange}
          value={lineItem.title}
        />
        <DefaultTextInput
          name="amount"
          label="Amount"
          onChangeText={handleChange}
          value={`${lineItem.amount}`}
          keyBoardType="number-pad"
        />
        <DefaultDatePicker onChange={handleDateChange} value={lineItem.date} />
        <DefaultSelectInput
          label="Category"
          items={data.categories.map((cat: CategoryModel) => ({
            label: cat.name,
            value: cat._id,
          }))}
          onChange={(itemValue, itemIndex) => handleCategoryChange(itemValue)}
          selectedLabel={`${selectedCategory.name || 'Choose Category'}`}
          selectedValue={`${selectedCategory._id}`}
        />
        <DefaultSelectInput
          label="Type"
          items={[
            { label: 'Expense', value: `${false}` },
            { label: 'Savings', value: `${true}` },
          ]}
          onChange={(itemValue, itemIndex) =>
            handleChange(nameof<LineItemModel>('isSavings'), itemValue)
          }
          selectedLabel={lineItem.isSavings ? 'Savings' : 'Expense'}
          selectedValue={`${lineItem.isSavings}`}
        />
        <DefaultTextInput
          name="description"
          label="Description"
          onChangeText={handleChange}
          value={lineItem.description}
        />
        <View style={styles.buttonContainer}>
          <DefaultButton
            onPress={handleSave}
            title="Save"
            buttonStyles={[GlobalStyles.isSuccess]}
            textStyles={[TextStyles.hasTextWeightBold, TextStyles.isUppercase]}
          />
          <DefaultButton
            onPress={() => navigation.goBack()}
            title="Cancel"
            buttonStyles={[GlobalStyles.isDanger]}
            textStyles={[TextStyles.hasTextWeightBold, TextStyles.isUppercase]}
          />
        </View>
      </>
    )
  );
};

export default LineItemForm;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
});
