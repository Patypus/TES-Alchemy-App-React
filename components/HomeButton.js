import React from "react";
import { Button } from 'react-native';

export const HomeButton = ({navigation}) => {
    return (<Button
        title='Home'
        accessibilityLabel='Home'
        onPress={() => navigation.navigate('Home')}
    />)
}