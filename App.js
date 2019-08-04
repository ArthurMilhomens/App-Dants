import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import favoritos from "./src/favoritos";
import pesquisar from "./src/pesquisar";
import rank from "./src/rank";
import loja from "./src/loja";
import suporte from "./src/suporte";

import shop from './assets/like.png'

import Icon from "react-native-vector-icons/FontAwesome5";

const App = createBottomTabNavigator({
  loja: {
    screen: loja,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="store" color={tintColor} size={20} />
      )
    }
  },
  favoritos: {
    screen: favoritos,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart" color={tintColor} size={20} />
      )
    }
  },
  pesquisar: {
    screen: pesquisar,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" color={tintColor} size={20} />
      )
    }
  },
  suporte: {
    screen: suporte,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="headset" color={tintColor} size={20} />
      )
    }
  },
  rank: {
    screen: rank,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="medal" color={tintColor} size={20} />
      )
    }
  }
});

export default createAppContainer(
  createStackNavigator({
      App,
  }, {
      defaultNavigationOptions: {
          headerTintColor: '#000',
          headerTitle: <View style={{width:"100%"}}><Text style={{alignItems:'center',textAlign:'center'}}>Brasília</Text></View>,
          headerBackTitle: null,
          headerLeft: <Icon name='user-circle' size={24} style={{ marginLeft:20, color:"#959595"}}/>,
          headerRight: <Icon name='ticket-alt' size={24} style={{ marginRight:20, color:"#959595"}}/>,
      },
      mode: 'modal',
  })
);

// export default createAppContainer(App);
