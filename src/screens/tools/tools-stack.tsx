import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Screens } from '..';
import ToolsScreen from '.';
import BudgetScreen from './budget';
import SavingsRateScreen from './savings-rate';
import LineItemScreen from './budget/line-item';
import CategoriesScreen from './budget/categories';

const ToolsStack = createStackNavigator();

const ToolsStackScreen: React.FC = () => (
  <ToolsStack.Navigator headerMode="none">
    <ToolsStack.Screen name={`${Screens.Tools}`} component={ToolsScreen} />
    <ToolsStack.Screen name={`${Screens.Budget}`} component={BudgetScreen} />
    <ToolsStack.Screen
      name={`${Screens.LineItem}`}
      component={LineItemScreen}
    />
    <ToolsStack.Screen
      name={`${Screens.Categories}`}
      component={CategoriesScreen}
    />
    <ToolsStack.Screen
      name={`${Screens.SavingsRate}`}
      component={SavingsRateScreen}
    />
  </ToolsStack.Navigator>
);

export default ToolsStackScreen;
