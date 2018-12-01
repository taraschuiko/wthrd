import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
BASE_FONT = 'museo';
export class AppText extends Component {
  render() {
    return (
      <Text {...this.props} style={[styles.myAppText, this.props.style]}>{this.props.children}</Text>
    )
  }
}
const styles = StyleSheet.create({
  myAppText: {
    fontFamily: BASE_FONT,
    fontSize: 16,
  },
});