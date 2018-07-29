import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen'
import DetailScreen from '../screens/DetailScreen'


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
  Detail: DetailScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};



   

export default createBottomTabNavigator({
  HomeStack
});
