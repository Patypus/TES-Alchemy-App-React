import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { general } from '../branding/styles';
import { AppView, ListItem, Loading } from '../components';
import { getIngredientById, getDBConnection } from '../data/dbService';

export const IngredientDetails = ({ route, navigation, }) => {
    const { ingredientName, ingredientId } = route.params;
    const [loadedEffects, setLoadedEffects] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        const db = await getDBConnection();
        const result = await getIngredientById(db, ingredientId);
        setLoadedEffects(result.effects);
        setLoading(false);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <AppView>
            <Text style={general.text}>Effects</Text>
            {loading ?
                <Loading /> :
                <View style={general.list}>
                    {loadedEffects.map((effect, index) => <ListItem
                        key={index}
                        title={effect}
                        onPress={() => navigation.navigate('EffectDetails', { effectName: effect })}
                    />)
                    }
                </View>
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