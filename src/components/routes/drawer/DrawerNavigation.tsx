import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from '../../elements';
import HomeStack from '../stacks/HomeStack';
import React from 'react';
import RSVPStack from '../stacks/RSVPStack';

type DrawerNavigationProps = {};
type DrawerIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Drawer = createDrawerNavigator();

const renderDrawerIcon = (routeName: string) => {
  return (props: DrawerIconProps) => {
    const {color} = props;
    let iconName = 'home';

    switch (routeName) {
      case 'Home':
        iconName = 'compass';
        break;
      case 'RSVP':
        iconName = 'bell';
        break;
      // case "ACCOUNT":
      //   iconName = 'user';
      //   break;
      default:
        break;
    }
    return <Icon name={iconName} solid size={24} color={color} />;
  };
};

const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={props => {
        const {
          route: {name: routeName},
        } = props;
        return {
          drawerIcon: renderDrawerIcon(routeName),
        };
      }}>
      <Drawer.Screen name={'Home'} component={HomeStack} />
      <Drawer.Screen name={'RSVP'} component={RSVPStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
