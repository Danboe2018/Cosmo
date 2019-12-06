import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Home Tab screen
import HomeScreen from '../containers/HomeView';

// Profile Tab Screen
import ProfileScreen from '../containers/ProfileView';

// Home tab stack
const HomeTab = createStackNavigator({
  Home: {
    screen: HomeScreen,
    headerMode: 'screen'
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
  HomeTab: {
    screen: HomeTab
  },
  ProfileTab:{
    screen: ProfileTab
  }
});

export const HomeContainer = createAppContainer(DashboardTabRoutes);