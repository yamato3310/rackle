import * as React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, TabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import GuideScreen from '../screens/GuideScreen';
import HomeScreen from '../screens/HomeScreen';
import MovieNavigateScreen from '../screens/MovieNavigateScreen';
import MyPageScreen from '../screens/MyPageScreen';
import CarouselScreen from '../screens/CarouselScreen';

const GuideStack = createStackNavigator({ Guide: { screen: GuideScreen } });
const HomeStack = createStackNavigator({ Home: { screen: HomeScreen } });
const MovieNavigateStack = createStackNavigator({ MovieNavigate: { screen: MovieNavigateScreen } });
const MyPageStack = createStackNavigator({ MyPage: { screen: MyPageScreen } });
const CarouselStack = createStackNavigator({ Carousel: { screen: CarouselScreen } });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

MyPageStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

MovieNavigateStack.navigationOptions = {
  tabBarLabel: 'Movie',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

CarouselStack.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

GuideStack.navigationOptions = { tabBarVisible: true };

const tabNavigator = createBottomTabNavigator({ HomeStack, MyPageStack, MovieNavigateStack, CarouselStack}, {
  tabBarOptions: {
    activeTintColor: '#312D2D',
    inactiveTintColor: '#312D2D',
    showLabel: false, // TODO 確認
  },
});

export default createStackNavigator({
  Main: { screen: tabNavigator },
  Guide: { screen: GuideStack },
  Carousel: { screen: CarouselStack },
}, {
    initialRouteName: 'Carousel',
    headerMode: 'none',
  }
);
