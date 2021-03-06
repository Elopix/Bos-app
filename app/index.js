import React, { Component } from "react";
import { MyApp } from "./config/router";
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from "react-native";
import { COLOR, ThemeContext, getTheme } from "react-native-material-ui";
import { Header } from "react-navigation";
// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: "#2196f3"
  },
  toolbar: {
    container: {
      height: Header.HEIGHT
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {};
    console.disableYellowBox = true;
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#0069c0" barStyle="light-content" />
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <MyApp />
        </ThemeContext.Provider>
      </SafeAreaView>
    );
  }
}

export default App;
