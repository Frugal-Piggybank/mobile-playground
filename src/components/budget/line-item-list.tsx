import React, { useState, useCallback } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useQuery } from 'react-apollo';

import { GET_LINE_ITEMS_BY_DATE } from '../../lib/graphql/queries';
import { PLATINUM } from '../../styles/variables';
import DefaultText from '../common/default-text';
import TextStyles from '../../styles/text';
import LineItemListHeader from './line-item-list-header';
import LineItem from './line-item';
import LineItemListFooter from './line-item-list-footer';

const LineItemList: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const CURRENT_YEAR = new Date().getFullYear();

  const { error, loading, data, refetch } = useQuery(GET_LINE_ITEMS_BY_DATE, {
    variables: {
      month: selectedMonth,
      year: CURRENT_YEAR,
    },
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  if (loading) return <ActivityIndicator size="large" color={PLATINUM} />;

  if (error) {
    return (
      <DefaultText textStyles={[TextStyles.hasTextDanger]}>
        Error Loading Budget
      </DefaultText>
    );
  }

  const renderItem = ({ item }) => <LineItem lineItem={item} />;

  return (
    <FlatList
      ListHeaderComponent={
        <LineItemListHeader
          selectedMonth={selectedMonth}
          selectedYear={CURRENT_YEAR}
          onPressNext={() => setSelectedMonth(selectedMonth + 1)}
          onPressPrev={() => setSelectedMonth(selectedMonth - 1)}
        />
      }
      ListFooterComponent={<LineItemListFooter />}
      onRefresh={() => refetch()}
      refreshing={loading}
      data={data.lineItemsByDate}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={() => (
        <DefaultText textStyles={[{ alignSelf: 'center' }]}>
          No items found.
        </DefaultText>
      )}
    />
  );
};

export default LineItemList;
