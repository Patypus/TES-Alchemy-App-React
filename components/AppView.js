import React from "react";
import { View, StyleSheet } from 'react-native';
import { general } from '../branding/styles';

export const AppView = ({children}) => {
    return (<View style={wrapper}>
        {children}
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  const wrapper = StyleSheet.compose(styles.container, general.background);