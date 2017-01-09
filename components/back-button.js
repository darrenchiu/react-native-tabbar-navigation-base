import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator, StyleSheet, TouchableOpacity } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 15,
  },
});

export default class BackButton extends Component {
  render() {
    return (
      <Icon style={styles.container} name="ios-arrow-back" size={33} color={"#007aff"}/>
    )
  }
}
