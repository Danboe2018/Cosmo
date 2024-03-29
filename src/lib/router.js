import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as globals from '../lib/globals';

const Logo = require('../assets/images/header/icn-logo.png');

import FooterIcon from '../components/FooterIcon';

// Auth tab screen
import LoginScreen from "../containers/LoginContainer";
import RegisterScreen from "../containers/RegisterContainer";

// Home tab screen
import HomeScreen from '../containers/HomeContainer';

// Profile tab screen
import ProfileScreen from '../containers/ProfileContainer';

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
        <Image source={Logo} style={{ flex: 1 }} resizeMode='contain' />
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
      backgroundColor: '#FFFFFF'
    }
  }
});

// Profile tab stack
const AuthTabRoutes = createStackNavigator({
  Login: {
    screen: LoginScreen,
    headerMode: 'screen'
  },
  Register: {
    screen: RegisterScreen,
    headerMode: 'screen'
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

export const AuthContainer = createAppContainer(AuthTabRoutes);
export const HomeContainer = createAppContainer(DashboardTabRoutes);
