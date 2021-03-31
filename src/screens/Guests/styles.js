import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#676767',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 18,
    color: '#474747',
  },
  guestsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  rangeAge: {
    color: '#8e8e8e',
  },
  totalValue: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  typeGuest: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
