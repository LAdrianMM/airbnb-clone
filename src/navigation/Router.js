import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationSearchScreen from '../screens/LocationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import ResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={LocationSearchScreen}
          options={{
            title: 'Search your destiantion',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />
        <Stack.Screen
          name={'Search Results'}
          component={ResultsScreen}
          options={{
            title: 'Results',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
