import React from "react";
import { Pressable, Text } from 'react-native';
import { general } from '../branding/styles';

export const HomeButton = ({navigation}) => {
    return (<Pressable
        onPress={() => navigation.navigate('Home')}
    >
        <Text style={general.text}>Home</Text>
    </Pressable>)
}