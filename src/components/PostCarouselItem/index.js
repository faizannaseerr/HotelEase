import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const PostCarouselItem = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {post: post});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{uri: post.image}} />
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed · {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type} · {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}> ${post.newPrice}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
