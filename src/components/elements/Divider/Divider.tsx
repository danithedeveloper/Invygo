import * as React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';
import useThemeColors from '../../../custom-hooks/useThemeColors';

type DividerProps = {
  style?: StyleProp<ViewStyle>;
};

const Divider: React.FC<DividerProps> = ({style}) => {
  const {border} = useThemeColors();
  return <View style={[styles.divider, {backgroundColor: border}, style]} />;
};

export default Divider;
