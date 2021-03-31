import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View>
      <View style={styles.guestsOption}>
        <View>
          <Text style={styles.typeGuest}>Adults</Text>
          <Text style={styles.rangeAge}>Ages 13 or above</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}>
            <Text style={styles.buttonIcon}>-</Text>
          </Pressable>
          <Text style={styles.totalValue}>{adults}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}>
            <Text style={styles.buttonIcon}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.guestsOption}>
        <View>
          <Text style={styles.typeGuest}>Childrens</Text>
          <Text style={styles.rangeAge}>Ages 2 - 12</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setChildrens(Math.max(0, childrens - 1))}>
            <Text style={styles.buttonIcon}>-</Text>
          </Pressable>
          <Text style={styles.totalValue}>{childrens}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setChildrens(childrens + 1)}>
            <Text style={styles.buttonIcon}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.guestsOption}>
        <View>
          <Text style={styles.typeGuest}>Infants</Text>
          <Text style={styles.rangeAge}>Under 2</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}>
            <Text style={styles.buttonIcon}>-</Text>
          </Pressable>
          <Text style={styles.totalValue}>{infants}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}>
            <Text style={styles.buttonIcon}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
