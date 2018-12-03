import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { AppText } from "./Typography";
import styles from "./styles/header";
import LinearGradient from 'react-native-linear-gradient';

const imgUrl = "../data/img/";

export default class Header extends Component {
render() {
    const { currentCityPretty, appearance, weather, error } = this.props;
    return (
      <View style={{backgroundColor: appearance.backgroundColor}}>
      {/* Top bar */}
        <View style={styles.topBar}>
          <View style={{flex: 1}}>
            <TouchableOpacity>
              <Image
                source={require(`${imgUrl}menu.png`)}
                style={styles.topBarIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <AppText style={styles.topBarText}>{currentCityPretty}</AppText>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity>
              <Image
                source={require(`${imgUrl}share.png`)}
                style={{...styles.topBarIcon, alignSelf: 'flex-end'}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header content */}
        <View style={styles.headerContent}>
          <AppText style={styles.nowText}>NOW</AppText>
          {(weather.weatherPrimary != "") && <AppText style={styles.weatherPrimary}>{weather.weatherPrimary}</AppText>}
          {/* <AppText style={styles.weatherPrimary}>
            {weather.weatherPrimary}
          </AppText> */}
          <AppText style={styles.temperatureText}>
            {weather.temperature}°
          </AppText>
          <Image source={require(`../data/img/sun.png`)} style={styles.sun} />
          <AppText>
            Feels like {weather.feelslike}°
          </AppText>
          {error && <AppText style={{marginTop: 12}}>Sorry. We couldn't load the information</AppText>}
          <ImageBackground source={appearance.background} style={styles.backgroundCity}>
            <Image source={appearance.person} />
          </ImageBackground>
        </View>
      </View>
    );
  }
}
