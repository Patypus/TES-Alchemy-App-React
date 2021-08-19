import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { general } from '../branding/styles';
import { AppView, ListItem } from '../components';
import { getIngredientById, getDBConnection } from '../data/dbService';

export const IngredientDetails = ({route, navigation, }) => {
    const { ingredientName, ingredientId } = route.params;
    
    const [loadedEffects, setLoadedEffects] = useState([]);

    const loadData = useCallback(async () => {
        const db = await getDBConnection();
        const result = await getIngredientById(db, ingredientId);
        setLoadedEffects(result.effects);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <AppView>
            <Text style={general.text}>{ingredientName}</Text>
            {loadedEffects.map((effect, index) => <ListItem 
                key={index}
                title={effect}
                onPress={() => navigation.navigate('EffectDetails', { effectName: effect})}
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