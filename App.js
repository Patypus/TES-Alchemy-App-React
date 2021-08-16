import React from "react";
import { MainMenu } from './features';
import { View, StyleSheet } from 'react-native';
import { general } from './branding/styles';
import { ElementList } from './components/ElementList';

const App = () => {
  return (
    <View style={wrapper}>
      <MainMenu/>
      <ElementList/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

const wrapper = StyleSheet.compose(styles.container, general.background);