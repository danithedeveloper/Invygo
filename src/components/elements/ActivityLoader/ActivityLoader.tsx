import * as React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';
import Text from '../Text';
import {color} from '../../../constants';

interface LoaderProps {
  isLoading: boolean;
  text: string;
}

const ActivityLoader: React.FC<LoaderProps> = ({isLoading, text}) => {
  if (!isLoading) {
    return null;
  }
  return (
    <View style={styles.loading} pointerEvents={'box-only'}>
      {/*<View style={styles.innerContainerStyle}>*/}
      <ActivityIndicator
        color={color.BLACK}
        style={{marginTop: 24}}
        size="large"
      />
      <Text style={styles.textStyle}>{text}</Text>
      {/*</View>*/}
    </View>
  );
};
export default ActivityLoader;
