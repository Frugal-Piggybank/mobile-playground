import React, { useState } from 'react';

import DefaultButton from '../common/default-button';
import GlobalStyles from '../../styles/global';
import TextStyles from '../../styles/text';
import ManageCategoryModal from './manage-category-modal';

interface CategoriesListFooterProps {
  refetch: (variables?: Record<string, any>) => Promise<any>;
}

const CategoriesListFooter: React.FC<CategoriesListFooterProps> = ({
  refetch,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <DefaultButton
        title="Add +"
        buttonStyles={[GlobalStyles.isPrimary]}
        textStyles={[TextStyles.hasTextDark]}
        onPress={() => setShowModal(true)}
      />
      <ManageCategoryModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        refetch={refetch}
      />
    </>
  );
};

export default CategoriesListFooter;
