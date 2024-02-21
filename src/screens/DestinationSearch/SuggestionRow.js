import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Text} from 'react-native';
import styles from './styles';

const SuggestionRow = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo name={'location-pin'} size={25} />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
);

export default SuggestionRow;
