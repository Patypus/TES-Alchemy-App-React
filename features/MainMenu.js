import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { general } from '../branding/styles';

export const MainMenu = () => {
    const searchByIngredient = () => {
        debugger;
    }

    const searchByEffect = () => {
        debugger;
    }

    return (
        <View>
            <Text style={general.text}>Skyrim Alchemy App</Text>
            <Text style={general.text}>Search for:</Text>
            <Button 
                onPress={searchByEffect}
                title='Effect'
                accessibilityLabel='Search by Effect'
                />
            <Button 
                onPress={searchByIngredient}
                title='Ingredient'
                accessibilityLabel='Search by Ingredient'
                />
        </View>
    )
}