import React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

const CustomMarker = ({ coordinate, price, isSelected, onPress }) => {
  return (
    <Marker onPress={onPress} coordinate={coordinate}>
      <View
        style={{
          backgroundColor: isSelected ? '#f15454' : '#fff',
          padding: 5,
          borderRadius: 20,
          borderColor: 'lightgrey',
          borderWidth: 1,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: isSelected ? '#fff' : '#f15454',
          }}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
