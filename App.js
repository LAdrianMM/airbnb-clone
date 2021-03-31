/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import GuestsScreen from './src/screens/Guests';
import HomeScreen from './src/screens/Home';
import LocationSearchScreen from './src/screens/LocationSearch';
import ResultsScreen from './src/screens/SearchResults';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <ResultsScreen /> */}
        {/* <LocationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
