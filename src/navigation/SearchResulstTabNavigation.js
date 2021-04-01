import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ResultsScreen from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResulstTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'} component={ResultsScreen} />
      <Tab.Screen name={'Map'} component={ResultsScreen} />
    </Tab.Navigator>
  );
};

export default SearchResulstTabNavigation;
