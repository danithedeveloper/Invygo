import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreen from '../../../screens/Home';
import {View} from 'react-native';
import styles from './styles';
import React from 'react';
import {Text} from '../../../elements';
import {color, SCREEN_NAME} from '../../../../constants';
import translations from '../../../../localization/translations';
import {createStackNavigator} from '@react-navigation/stack';

type HomeStackProps = {};
const Stack = createStackNavigator();

const HomeStack: React.FC<HomeStackProps> = () => {
  const insets = useSafeAreaInsets();
  const _renderHomeHeaderTitle = () => {
    return (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Invygo Meets</Text>
      </View>
    );
  };
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.HOME_SCREEN}
      screenOptions={{
        headerShown: true,
        title: translations.home,
        headerStatusBarHeight: insets.top,
        headerStyle: {backgroundColor: 'black'},
      }}>
      <Stack.Screen
        options={() => {
          return {
            headerStyle: {backgroundColor: color.HOME_BG},
            headerTitle: _renderHomeHeaderTitle,
            title: translations.home,
            headerTitleAlign: 'center',
            //headerRight: _renderExploreHeaderRight,
            //headerRightContainerStyle: styles.headerRightContainer,
          };
        }}
        name={SCREEN_NAME.HOME_SCREEN}
        component={HomeScreen}
      />
      {/*<Stack.Screen*/}
      {/*  options={() => {*/}
      {/*    return {*/}
      {/*      headerShown: false,*/}
      {/*    };*/}
      {/*  }}*/}
      {/*  name={SCREEN_NAME.QR_CODE_SCREEN}*/}
      {/*  component={QRScannerScreen}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};

export default HomeStack;
