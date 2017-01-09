/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import TabOne from './tab-one';
import TabTwo from './tab-two';


export default class TabBarNavigationBase extends Component {

  constructor(){
    super();
    this.state = {selectedTab: 'home'};
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => this._renderIcon(false)}
          renderSelectedIcon={() => this._renderIcon(true)}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <TabOne/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => this._renderIcon(false)}
          renderSelectedIcon={() => this._renderIcon(true)}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <TabTwo/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  _renderIcon(isSelected) {
    let color = isSelected ? "#007aff" : '#c7c7cc';

    return (
      <Icon name="md-notifications" size={25} color={color}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TabBarNavigationBase', () => TabBarNavigationBase);
