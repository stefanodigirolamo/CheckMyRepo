import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 30,
    paddingRight: 30,
  },
  firstTitle: {
    fontSize: 18,
    fontFamily: "OpenSans-ExtraBold"
  },
  secondTitle: {
    fontSize: 40,
    fontFamily: "OpenSans-Medium"
  },
  routesContainer: {
    marginTop: 50,
  },
  routeText: {
    fontSize: 35,
    fontFamily: "OpenSans-Regular",
    color: '#525659',
    marginVertical: 10,
  },
  errorMessage: {
    marginTop: 50,
    fontSize: 15,
    fontFamily: "OpenSans-ExtraBold",
    minHeight: 40,
  },
  buttonLabel: {
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
    alignSelf: 'flex-end',
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 60,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 50
  },
  successContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  firstText: {
    fontSize: 35,
    fontFamily: "OpenSans-ExtraBold",
    textAlign: 'center',
  },
  secondText: {
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
    alignSelf: 'flex-end',
  },
});
