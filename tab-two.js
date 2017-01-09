import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator, StyleSheet } from 'react-native';
import MyScene from './my-scene';

import Router from 'react-native-simple-router';
import BackButton from './components/back-button'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F7F7F7',
  },
  titleStyle: {
    color: '#000000',
  }
});

const firstRoute = {
  name: 'Profile Tab',
  component: MyScene,
};

export default class TabOne extends Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        titleStyle={styles.titleStyle}
        backButtonComponent={BackButton}
        statusBarColor="black"
      />
    )
  }

}