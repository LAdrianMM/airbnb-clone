import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import ResultsScreen from '../screens/SearchResults';
import HomeScreen from '../screens/Home';
import SearchResultsTabNavigation from './SearchResulstTabNavigation';

const Stack = createStackNavigator();

const ExplorerNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'ResultsScreen'}
        component={SearchResultsTabNavigation}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExplorerNavigator;
