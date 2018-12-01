import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { AppText } from "./Typography";

const imgUrl = "../data/img/";

export default class Header extends Component {
  state = {
    city: "Dubai",
    background: require(`${imgUrl}backgrounds/citySummerDay.png`),
    person: require(`${imgUrl}menu.png`)
  };

  render() {
    return (
      <ImageBackground source={this.state.background} style={styles.background}>
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
            <AppText style={styles.topBarText}>{this.state.city}</AppText>
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
      </ImageBackground>
    );
  }
}

let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    padding: 16
  },
  topBar: {
    flex: 1,
    // width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "stretch"
  },
  topBarText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: 'center'
  },
  topBarIcon: {
    width: 16,
    height: '100%'
  }
});
