import React from 'react';
import { Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = ({ post }) => {
  const navigation = useNavigation();

  const goToPageDetails = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (
    <Pressable onPress={goToPageDetails} style={styles.container}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}
        {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text> / night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
