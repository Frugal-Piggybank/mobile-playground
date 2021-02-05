import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LineItemModel from '../../interfaces/line-item';
import DefaultText from '../common/default-text';
import { getDisplayFormattedDate } from '../../lib/helpers/datetime';
import TextStyles from '../../styles/text';
import { Screens } from '../../screens';
import ListStyles from '../../styles/list';

interface LineItemProps {
  lineItem: LineItemModel;
}

const LineItem: React.FC<LineItemProps> = ({ lineItem }) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate(`${Screens.LineItem}`, { lineItem })}
    >
      <View style={ListStyles.listItem}>
        <DefaultText>{getDisplayFormattedDate(lineItem.date)}</DefaultText>
        <DefaultText textStyles={[TextStyles.hasTextWeightBold]}>
          {lineItem.title}
        </DefaultText>
        <DefaultText textStyles={[TextStyles.hasTextWeightBold]}>
          ${lineItem.amount}
        </DefaultText>
      </View>
    </TouchableHighlight>
  );
};

export default LineItem;
