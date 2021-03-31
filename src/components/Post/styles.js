import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bedrooms: {
    color: '#5b5b5b',
    marginVertical: 10,
  },
  container: {
    margin: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  image: {
    borderRadius: 10,
    height: '55%',
    resizeMode: 'cover',
    width: '100%',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default styles;
