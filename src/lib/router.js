import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as globals from '../lib/globals';

const Logo = require('../assets/images/header/icn-logo.png');

import FooterIcon from '../components/FooterIcon';

// Home Tab screen
import HomeScreen from '../containers/HomeView';

// Profile Tab Screen
import ProfileScreen from '../containers/ProfileView';

// Home tab stack
const HomeTab = createStackNavigator({
  Home: {
    screen: HomeScreen,
    headerMode: 'screen',
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: globals.COLORS.PRIMARY
      },
      headerTitle: (
        <Image source={Logo} />
      )
    })
  }
});

// Profile tab stack
const ProfileTab = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    headerMode: 'screen'
  }
});

const DashboardTabRoutes = createBottomTabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ focused }) => {
          return <FooterIcon tabBarIndex={0} isFocused={focused} />
        }
      }
    }
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ focused }) => {
          return <FooterIcon tabBarIndex={1} isFocused={focused} />
        }
      }
    }
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    style: {
      height: 50,
      paddingVertical: 5,
      backgroundColor: globals.COLORS.white
    }
  }
});

export const HomeContainer = createAppContainer(DashboardTabRoutes);