import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: 25,
    width: 200,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 500,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    position: 'absolute',
    top: 20,
    width: Dimensions.get('screen').width - 20,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
    lineHeight: 80,
    marginLeft: 25,
    width: '70%',
  },
});

export default styles;
