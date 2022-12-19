import {I18nManager, StyleSheet} from 'react-native';
import {color} from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    borderColor: color.BLACK,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    height: 45,
  },
  leftIcon: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: I18nManager.isRTL ? 10 : 0,
  },
  textField: {
    flex: 1,
    padding: 12,
    borderRadius: 0,
    height: 45,
  },
});
