import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from './styles';
import searchData from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const LocationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

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
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.locationItem}
            key={item.id}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default LocationSearchScreen;
