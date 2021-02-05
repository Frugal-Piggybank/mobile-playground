import React from 'react';
import { Text } from 'react-native';

import TextStyles from '../../styles/text';

const DefaultHeading: React.FC = ({ children }) => (
  <Text style={[TextStyles.heading, TextStyles.title]}>{children}</Text>
);

export default DefaultHeading;
