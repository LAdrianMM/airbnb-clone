import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from './styles';
import searchData from '../../../assets/data/search';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestLocation from './SuggestLocation';

const LocationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{
          textInput: styles.inputSearch,
        }}
        suppressDefaultStyles
        query={{
          key: 'AIzaSyASz9_2-fQjrDSQ9zgiY8ZMHp1PuMXWB9M',
          language: 'en',
          types: '(cities)',
        }}
        renderRow={item => <SuggestLocation item={item} />}
      />
    </View>
  );
};

export default LocationSearchScreen;
