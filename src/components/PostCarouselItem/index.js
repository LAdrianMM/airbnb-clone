import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import styles from './styles';

const PostCarouselItem = ({ post }) => {
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: post.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.title}
            {post.description}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${post.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;
