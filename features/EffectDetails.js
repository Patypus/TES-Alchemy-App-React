import React from "react";
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';
import { general } from '../branding/styles';
import { AppView } from '../components';

export const EffectDetails = ({ route, navigation }) => {
    const { effectName } = route.params;
    const ingredients = [
        { id: 1, name: 'Briar Heart' },
        { id: 3, name: 'Deadra Heart' },
        { id: 5, name: 'Troll Fat' }
    ]
    return (
        <AppView>
            <Text style={general.text}>{effectName}</Text>
            {ingredients.map((ingredient, index) => <Button 
                key={index}
                onPress={() => navigation.navigate('IngredientDetails', { ingredientId: ingredient.id, ingredientName: ingredient.name})}
                title={ingredient.name}
                accessibilityLabel={ingredient.name}
                />)
            }
        </AppView>
    );
};

EffectDetails.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object,
    /** React navigation object for the route to navigate to this component */
    route: PropTypes.object
};