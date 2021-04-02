import React from 'react';
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const PostCarouselItem = ({ post }) => {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  const goToPageDaetails = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (
    <Pressable
      onPress={goToPageDaetails}
      style={[styles.container, { width: width - 60 }]}>
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
    </Pressable>
  );
};

export default PostCarouselItem;
