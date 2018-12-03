import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "stretch"
  },
  topBarText: {
    fontSize: 20, //responsiveFontSize(2.8),
    textAlign: 'center',
    fontWeight: '300'
  },
  topBarIcon: {
    width: 16, //responsiveWidth(4.1),
    height: '100%'
  },
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    position: 'relative'
  },
  nowText: {
    fontSize: 12, //responsiveFontSize(1.6),
    opacity: 0.4,
    marginTop: 6,
    marginBottom: 6,
    fontFamily: 'museo-500'
  },
  weatherPrimary: {
    marginBottom: 6
  },
  temperatureText: {
    fontSize: 48, //responsiveFontSize(6.5)
    marginBottom: 4,
    fontFamily: 'museo-100'
  },
  sun: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 32,
    right: 24
  },
  backgroundCity: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    resizeMode: 'stretch'
  }
});

export default styles;