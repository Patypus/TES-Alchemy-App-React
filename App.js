import React from "react";
import { MainMenu } from './features';
import { View, StyleSheet } from 'react-native';
import { general } from './branding/styles';


const App = () => {
  return (
    <View style={wrapper}>
      <MainMenu/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const wrapper = StyleSheet.compose(styles.container, general.background);