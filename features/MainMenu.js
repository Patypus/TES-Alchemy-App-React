import React from "react";
import { Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
            <View style={general.inline}>
                <Icon name="search" size={20} color="#FFF" />
                <Text style={general.text}> Search for:</Text>
            </View>
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