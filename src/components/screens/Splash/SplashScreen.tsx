import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles';
import {APP_ICON} from '../../../constants';

type SplashScreenProps = {};

const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <ImageBackground
      source={APP_ICON}
      resizeMode="contain"
      style={styles.image}
    />
  );
};
export default SplashScreen;
