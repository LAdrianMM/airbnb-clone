import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bedrooms: {
    color: '#5b5b5b',
    marginVertical: 10,
  },
  container: {
    padding: 5,
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    aspectRatio: 1,
  },
  newPrice: {
    fontWeight: 'bold',
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default styles;
