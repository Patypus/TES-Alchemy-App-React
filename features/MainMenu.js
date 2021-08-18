import React from "react";
import { Text, Button, Pressable } from 'react-native';
import { general } from '../branding/styles';
import { AppView } from '../components';
import PropTypes from 'prop-types';

export const MainMenu = ({ navigation }) => {
    const searchByIngredient = () => {
        navigation.navigate('IngredientSearch');
    }

    const searchByEffect = () => {
        navigation.navigate('EffectSearch');
    }

    return (
        <AppView>
            <Text style={general.text}>Search for:</Text>
            <Pressable
                onPress={searchByEffect}
                style={general.button}
            >
                <Text style={general.buttonText}>Effect</Text>
            </Pressable>
            <Pressable
                onPress={searchByIngredient}
                style={general.button}
            >
                <Text style={general.buttonText}>Ingredient</Text>
            </Pressable>
        </AppView>
    )
}

MainMenu.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};