import React from "react";
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

export const HomeButton = ({navigation}) => {
    return (<Pressable
        onPress={() => navigation.navigate('Home')}
    >
        <Icon name="home" size={30} color="#FFF" />
    </Pressable>)
}

HomeButton.propTypes = {
    /** react-navigation navigation object */
    navigation: PropTypes.object
};
