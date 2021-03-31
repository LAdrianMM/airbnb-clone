import React from 'react';
import { View, FlatList } from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const ResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Post key={item.id} post={item} />}
      />
    </View>
  );
};

export default ResultsScreen;
