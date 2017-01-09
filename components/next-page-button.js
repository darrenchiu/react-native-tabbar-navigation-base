import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator, StyleSheet, TouchableOpacity } from 'react-native';
// import {
//   StyleSheet,
//   Navigator,
//   View,
//   Platform,
//   Text,
//   StatusBar,
// } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MyScene from '../my-scene';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
});

export default class NextPageButton extends Component {

  constructor(props, context) {
    super(props, context);
    this.nextPage = this._nextPage.bind(this);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.nextPage}>
        <Icon name="md-add" size={33} color={"#007aff"}/>
      </TouchableOpacity>
    )
  }

  _nextPage() {
    this.props.toRoute({
      name: "Screen From Right Corner",
      component: MyScene,
      sceneConfig: Navigator.SceneConfigs.PushFromRight,
    });
  }

}
