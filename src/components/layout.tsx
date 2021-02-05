import React from 'react';
import { View } from 'react-native';

import GlobalStyles from '../styles/global';

const Layout: React.FC = ({ children }) => <View style={GlobalStyles.container}>{children}</View>;

export default Layout;
