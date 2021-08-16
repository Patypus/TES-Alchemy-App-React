import React from 'react';
import { Text } from 'react-native';
import { general } from '../branding/styles';

export const ListItem =({title}) => {
return (<Text style={general.text}>{title}</Text>)
}