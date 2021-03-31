import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.title}
        {post.description}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text> / night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
