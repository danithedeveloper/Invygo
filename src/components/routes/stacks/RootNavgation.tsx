import {NavigationContainer} from '@react-navigation/native';
import ThemeContext from '../../../context/ThemeContext';
import {darkTheme, lightTheme} from '../../../styles/theme';
import React, {useContext} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SplashScreen from '../../screens/Splash';
import {useAppSelector} from '../../../hooks';
import HomeStack from './HomeStack';
import DrawerNavigation from "../drawer";
const RootStack = createStackNavigator();

const RootNavigation = () => {
  const {theme} = useContext(ThemeContext);
  const flex = 1;
  const rootContainerBackgroundColor =
    theme === 'light'
      ? lightTheme.colors.background
      : darkTheme.colors.background;
  const screenOptions =
    Platform.OS === 'ios'
      ? {
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }
      : {
          ...TransitionPresets.FadeFromBottomAndroid,
        };

  const {showSplashScreen} = useAppSelector(state => state.AppConfig);

  return (
    <NavigationContainer theme={theme === 'light' ? lightTheme : darkTheme}>
      <View style={{flex, backgroundColor: rootContainerBackgroundColor}}>
        <StatusBar
          hidden
          backgroundColor={
            theme === 'light'
              ? lightTheme.colors.background
              : darkTheme.colors.background
          }
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        />
        <RootStack.Navigator screenOptions={screenOptions}>
          {showSplashScreen ? (
            <RootStack.Screen
              name="Main"
              options={{headerShown: false}}
              component={SplashScreen}
            />
          ) : (
            <RootStack.Screen
              options={{
                headerTransparent: true,
                headerStatusBarHeight: 0,
                title: '',
                headerBackTitleVisible: false,
              }}
              name="Home"
              component={DrawerNavigation}
            />
          )}
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default RootNavigation;
