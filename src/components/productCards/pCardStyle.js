import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#ECEFF1',
    s,
  },

  imgcontainer: {
    margin: 10,
    height: Dimensions.get('window').height / 3,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },

  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  textcontainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },

  title: {
    color: '#2E2F2F',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

  price: {
    color: '#808080',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

  stock: {
    color: '#FC2A2B',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
