import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Event from "../screens/Event";
import Header from "../shared/Header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerTransparent: true,
    },
  },
  Event: {
    screen: Event,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerTransparent: true,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { height: 100 },
  },
});

export default createAppContainer(HomeStack);
