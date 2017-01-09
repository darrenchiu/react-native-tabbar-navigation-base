import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator, Button } from 'react-native';

import NextPageButton from './components/next-page-button';


export default class MyScene extends Component {

  constructor(props, context) {
    super(props, context);

    this.nextPage = this._nextPage.bind(this);
  }

  render() {
    return (
      <View>
        <Button title="Next Page" onPress={this.nextPage}></Button>
      </View>
    )
  }

  _nextPage() {
    this.props.toRoute({
      name: "A new screen",
      component: MyScene,
      sceneConfig: Navigator.SceneConfigs.PushFromRight,
      rightCorner: this._nextButton.bind(this),
    });
  }

  _nextButton() {
    return (
      <NextPageButton {... this.props}></NextPageButton>
    )
  }
}
