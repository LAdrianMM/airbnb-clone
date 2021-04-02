import React from 'react';
import { View } from 'react-native';
import PostDetails from '../../components/PostDetails';
import places from '../../../assets/data/feed';
import { useRoute } from '@react-navigation/native';

const PostScreen = () => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

  console.log(post);

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <PostDetails post={post} />
    </View>
  );
};

export default PostScreen;
