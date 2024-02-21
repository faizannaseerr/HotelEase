import React from 'react';
import {View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

const PostScreen = props => {
  const route = useRoute();
  const place = route.params.post;
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <DetailedPost post={place} />
    </View>
  );
};

export default PostScreen;
