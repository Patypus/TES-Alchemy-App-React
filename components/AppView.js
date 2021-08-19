import React from "react";
import { View, StyleSheet } from 'react-native';
import { general } from '../branding/styles';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
const wrapper = StyleSheet.compose(styles.container, general.background);

export const AppView = ({children}) => {
    return (<View style={wrapper}>
        {children}
    </View>)
}

AppView.propTypes = {
    /** children to render in the view */
    children: PropTypes.node,
};