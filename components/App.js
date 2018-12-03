import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "./Header";

const url = "https://api.aerisapi.com/observations/";
const clientId = "00tn6l9YYpAaTUAtlKhk7";
const clientSecret = "GiSfm2HIoA0CAl4Noh1t2vnIfnn73EYoP98vxsjw";

const imgUrl = "../data/img/";

export default class App extends Component {
  state = {
    currentCity: "",
    currentCityPretty: "Dubai",
    appearance: {
      background: require(`${imgUrl}backgrounds/citySummerDay.png`),
      person: require(`${imgUrl}persons/personMaleL01.png`),
      backgroundColor: "#4A9FC5"
    },
    weather: {
      weatherPrimary: "",
      temperature: 0,
      feelslike: 0
    },
    error: false
  };

  componentDidMount() {
    this.getWeather("dubai,uae");
  }

  getWeather = city => {
    fetch(`${url}${city}?client_id=${clientId}&client_secret=${clientSecret}`)
      .then(r => r.json())
      .then(json =>
        this.setState(prevState => ({
          ...prevState,
          currentCity: city,
          weather: {
            weatherPrimary: json.response.ob.weatherPrimary,
            temperature: json.response.ob.tempC,
            feelslike: json.response.ob.feelslikeC
          }
        }))
      )
      .catch(error => {
        this.setState(prevState => ({
          ...prevState,
          error: true
        }));
      });
  };
  render() {
    const { currentCityPretty, appearance, weather, error } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Header
          currentCityPretty={currentCityPretty}
          appearance={appearance}
          weather={weather}
          error={error}
        />
        {/* <HourlyForecast />
        <WeatherDetails />
        <DailyForecast /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "museo"
  }
});
