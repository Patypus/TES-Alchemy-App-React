import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { AppView, ListItem, Loading } from '../components';
import { FlatList } from 'react-native';
import { getAllIngredients, getDBConnection } from '../data/dbService';
import { general } from '../branding/styles';

export const IngredientSearch = ({ navigation }) => {
    const [loadedIngredients, setLoadedIngredients] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        const db = await getDBConnection();
        const results = await getAllIngredients(db);
        setLoadedIngredients(results);
        setLoading(false);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <AppView>
            {loading ?
                <Loading /> :
                <FlatList
                    style={general.list}
                    data={loadedIngredients}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={20}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.name}
                            onPress={() => navigation.navigate('IngredientDetails', { ingredientId: item.id, ingredientName: item.name })}
                        />}
                />
            }
        </AppView>
    );
}

IngredientSearch.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};