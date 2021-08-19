import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { AppView, ListItem } from '../components';
import { FlatList } from 'react-native';
import { getAllIngredients, getDBConnection } from '../data/dbService';

export const IngredientSearch = ({navigation}) => {
    const [loadedIngredients, setLoadedIngredients] = useState([]);

    const loadData = useCallback(async () => {
        const db = await getDBConnection();
        const results = await getAllIngredients(db);
        setLoadedIngredients(results);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <AppView>
            <FlatList 
                data={loadedIngredients}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                    <ListItem
                        title={item.name} 
                        onPress={() => navigation.navigate('IngredientDetails', { ingredientId: item.id, ingredientName: item.name})} 
            />}
            />
        </AppView>
    );
}

IngredientSearch.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};