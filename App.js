/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsPage from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

import {withAuthenticator} from '@aws-amplify/ui-react-native';

// const post1 = feed[0];
// const post2 = feed[1];

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
      {/* <SafeAreaView> */}
      {/* <HomeScreen /> */}
      {/* <SearchResultsPage /> */}
      {/* <DestinationSearchScreen /> */}
      {/* <GuestsScreen /> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default withAuthenticator(App);
