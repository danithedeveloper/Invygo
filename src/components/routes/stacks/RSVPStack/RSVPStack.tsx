import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreen from '../../../screens/Home';
import {View} from 'react-native';
import styles from './styles';
import React from 'react';
import {Text} from '../../../elements';
import {color, SCREEN_NAME} from '../../../../constants';
import translations from '../../../../localization/translations';
import {createStackNavigator} from '@react-navigation/stack';
import RSVPScreen from "../../../screens/RSVP";
import RSVPDetails from "../../../screens/RSVPDetails";

type HomeStackProps = {};
const Stack = createStackNavigator();

const RSVPStack: React.FC<HomeStackProps> = () => {
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
      initialRouteName={SCREEN_NAME.RSVP_SCREEN}
      screenOptions={{
        headerShown: true,
        title: translations.rsvp,
        headerStatusBarHeight: insets.top,
        headerStyle: {backgroundColor: 'black'},
      }}>
      <Stack.Screen
        options={() => {
          return {
            headerStyle: {backgroundColor: color.HOME_BG},
            headerTitle: _renderHomeHeaderTitle,
            title: translations.rsvp,
            headerTitleAlign: 'center',
            //headerRight: _renderExploreHeaderRight,
            //headerRightContainerStyle: styles.headerRightContainer,
          };
        }}
        name={SCREEN_NAME.RSVP_SCREEN}
        component={RSVPScreen}
      />
      <Stack.Screen
        options={() => {
          return {
            headerShown: false,
          };
        }}
        name={SCREEN_NAME.RSVP_DETAILS_SCREEN}
        component={RSVPDetails}
      />
    </Stack.Navigator>
  );
};

export default RSVPStack;
