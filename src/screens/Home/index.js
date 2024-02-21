import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={16} color={'#f15454'}></Fontisto>
        <Text style={styles.searchButtonText}> Where are you going? </Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}> Go </Text>
        <Text style={styles.title}> Near </Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('explore btn clicked')}>
          <Text style={styles.buttonText}> Explore nearby stays </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
