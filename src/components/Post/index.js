import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/post-image.jpg')}
        style={styles.image}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        The flat is perfectly situated on the outskirts of Valdemoro near the
        station. It is 23 kilometres to from Madrid. It is a perfect flat for a
        couple. It is on the 5th floor of a new building with a lift. It has two
        bedrooms, a lovely dinindg room, a well-equiped kitchen and two
        bathrooms.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30 </Text> / night
      </Text>
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
