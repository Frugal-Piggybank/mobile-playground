import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'react-apollo';

import TextStyles from '../../styles/text';
import { GET_CATEGORIES } from '../../lib/graphql/queries';
import { PLATINUM } from '../../styles/variables';
import DefaultText from '../common/default-text';
import Category from './category';
import DefaultHeading from '../common/default-heading';
import CategoriesListFooter from './categories-list-footer';

const CategoriesListHeader: React.FC = () => (
  <DefaultHeading>Categories</DefaultHeading>
);

const CategoriesList: React.FC = () => {
  const { error, loading, data, refetch } = useQuery(GET_CATEGORIES);

  if (loading) return <ActivityIndicator size="large" color={PLATINUM} />;

  if (error) {
    return (
      <DefaultText textStyles={[TextStyles.hasTextDanger]}>
        Error Loading Categories
      </DefaultText>
    );
  }

  const renderCategory = ({ item }) => (
    <Category category={item} refetch={refetch} />
  );

  return (
    <FlatList
      ListHeaderComponent={<CategoriesListHeader />}
      ListFooterComponent={<CategoriesListFooter refetch={refetch} />}
      onRefresh={() => refetch()}
      refreshing={loading}
      data={data.categories}
      renderItem={renderCategory}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={() => (
        <DefaultText textStyles={[{ alignSelf: 'center' }]}>
          No items found.
        </DefaultText>
      )}
    />
  );
};

export default CategoriesList;
