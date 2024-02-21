import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post';

const SearchResultsPage = props => {
  const posts = props.posts;

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsPage;
