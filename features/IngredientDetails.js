import React from "react";
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';
import { general } from '../branding/styles';
import { AppView } from '../components';

export const IngredientDetails = ({route, navigation, }) => {
    const { ingredientName, ingredientId } = route.params;
    const effects = [
        'Restore Stamina',
        'Invisibility',
        'Fortify Barter',
        'Ravage Health'
    ]
    return (
        <AppView>
            <Text style={general.text}>{ingredientName}</Text>
            {effects.map((effect, index) => <Button 
                key={index}
                onPress={() => navigation.navigate('EffectDetails', { effectName: effect})}
                title={effect}
                accessibilityLabel={effect}
                />)
            }
        </AppView>
    );
};

IngredientDetails.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object,
    /** React navigation object for the route to navigate to this component */
    route: PropTypes.object
};