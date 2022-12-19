import {StyleSheet} from 'react-native';
import {color} from '../../../constants';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: color.BLACK,
    marginHorizontal: '10%',
  },
  buttonText: {fontSize: 30},
  counterText: {fontSize: 30},
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
