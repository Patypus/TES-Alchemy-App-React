import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { general } from '../branding/styles';
import { AppView,  ListItem } from '../components';
import { getIngredientsWithEffect, getDBConnection } from '../data/dbService';

export const EffectDetails = ({ route, navigation }) => {
    const { effectName } = route.params;
    const [ingredientsWithEffect, setIngredientsWithEffect] = useState([]);

    const loadData = useCallback(async () => {
        const db = await getDBConnection();
        const results = await getIngredientsWithEffect(db, effectName);
        setIngredientsWithEffect(results);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <AppView>
            <Text style={general.text}>{effectName}</Text>
            {ingredientsWithEffect.map((ingredient, index) => <ListItem 
                key={index}
                title={ingredient.name}
                onPress={() => navigation.navigate('IngredientDetails', { ingredientId: ingredient.id, ingredientName: ingredient.name})}
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