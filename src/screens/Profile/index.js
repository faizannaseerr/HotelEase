import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {Auth} from 'aws-amplify';

const ProfileScreen = props => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Pressable
        style={{
          width: '90%',
          height: 40,
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: 20,
          alignItems: 'center',
        }}
        onPress={logout}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
