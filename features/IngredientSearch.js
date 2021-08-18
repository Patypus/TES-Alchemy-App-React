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
                renderItem={({item}) => 
                    <ListItem 
                        key={item.IngredientId} 
                        title={item.IngredientName} 
                        clickHandler={() => navigation.navigate('IngredientDetails', { ingredientId: item.IngredientId, ingredientName: item.IngredientName})} 
            />}
            />
        </AppView>
    );
}

IngredientSearch.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};