import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Suporte extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: <View />
  });
  render() {
    return <View>
    <Text>Suporte</Text>
  </View>;
  }
}
