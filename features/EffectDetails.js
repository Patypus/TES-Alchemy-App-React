import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { Text, FlatList } from 'react-native';
import { general } from '../branding/styles';
import { AppView, ListItem, Loading } from '../components';
import { getIngredientsWithEffect, getDBConnection } from '../data/dbService';

export const EffectDetails = ({ route, navigation }) => {
    const { effectName } = route.params;
    const [ingredientsWithEffect, setIngredientsWithEffect] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        const db = await getDBConnection();
        const results = await getIngredientsWithEffect(db, effectName);
        setIngredientsWithEffect(results);
        setLoading(false);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <AppView>
            <Text style={general.text}>Ingredients with effect</Text>
            {loading ?
                <Loading /> :
                <FlatList 
                    style={general.list}
                    data={ingredientsWithEffect}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.name}
                            onPress={() => navigation.navigate('IngredientDetails', { ingredientId: item.id, ingredientName: item.name })}
                    />
                    )}/>
            }
        </AppView>
    );
};

EffectDetails.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object,
    /** React navigation object for the route to navigate to this component */
    route: PropTypes.shape({
        params: PropTypes.shape({
            effectName: PropTypes.string.isRequired
        })
    })
};