import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ResultsScreen from '../screens/SearchResults';
import SearchResultsMaps from '../screens/SearchResultsMaps';

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
      <Tab.Screen name={'Map'} component={SearchResultsMaps} />
    </Tab.Navigator>
  );
};

export default SearchResulstTabNavigation;
