import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        {/* <HourlyForecast />
        <WeatherDetails />
        <DailyForecast /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'museo'
  }
});
