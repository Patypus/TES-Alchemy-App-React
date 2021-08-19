import React from "react";
import { Pressable, Text } from 'react-native';
import { general } from '../branding/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HomeButton = ({navigation}) => {
    return (<Pressable
        onPress={() => navigation.navigate('Home')}
    >
        <Icon name="home" size={30} color="#FFF" />
    </Pressable>)
}