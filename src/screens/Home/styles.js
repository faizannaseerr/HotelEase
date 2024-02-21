import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'left',
  },

  title: {
    // marginLeft: 5,
    fontSize: 80,
    fontWeight: '800',
    color: 'white',
    width: '100%',
    lineHeight: 80,
  },

  button: {
    backgroundColor: 'white',
    width: 200,
    marginLeft: 15,
    marginTop: 25,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 800,
  },

  searchButton: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    zIndex: 100,
    width: Dimensions.get('screen').width - 20,
  },

  searchButtonText: {
    fontSize: 16,
    fontWeight: 800,
  },
});

export default styles;
