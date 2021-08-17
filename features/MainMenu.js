import React from "react";
import { Text, Button } from 'react-native';
import { general } from '../branding/styles';
import { AppView } from '../components';
import PropTypes from 'prop-types';

export const MainMenu = ({navigation}) => {
    const searchByIngredient = () => {
        navigation.navigate('IngredientSearch');
    }

    const searchByEffect = () => {
        navigation.navigate('EffectSearch');
    }

    return (
        <AppView>
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
        </AppView>
    )
}

MainMenu.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};