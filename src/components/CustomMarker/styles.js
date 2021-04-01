import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: props => (props.isSelected ? '#f15454' : '#fff'),
    padding: 5,
    color: '#000',
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    color: props => (props.isSelected ? '#fff' : '#f15454'),
  },
});

export default styles;
