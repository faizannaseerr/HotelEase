import React from 'react';
import {View} from 'react-native'; // TextInput, FlatList, Text, Pressable
import styles from './styles';
// import {useState} from 'react';
// import searchResults from '../../../assets/data/search';
// import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
  // const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          console.log(data, details);
          navigation.navigate('Guests', {viewport: details.geometry.viewport});
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyCaOxqReWjT1lqbzN2AkuEXzHmx0rrLZL4',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        enablePoweredByContainer={false}
        renderRow={item => <SuggestionRow item={item} />}
      />

      {/* <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        onChangeText={setInputText}
      /> */}
      {/* <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      /> */}
    </View>
  );
};

export default DestinationSearchScreen;
