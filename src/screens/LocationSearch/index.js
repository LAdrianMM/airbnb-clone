import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import styles from './styles';
import searchData from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const LocationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Where are you going'}
        style={styles.inputSearch}
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchData}
        renderItem={({ item }) => (
          <View style={styles.locationItem} key={item.id}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LocationSearchScreen;
