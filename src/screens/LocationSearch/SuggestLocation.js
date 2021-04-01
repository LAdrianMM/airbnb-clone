import React from 'react';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const SuggestLocation = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.locationItem} key={item.id}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={25} />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  );
};

export default SuggestLocation;
