import React from "react";
import PropTypes from 'prop-types';
import { AppView, ListItem } from '../components';
import { FlatList } from 'react-native';

export const IngredientSearch = ({navigation}) => {
    const ingredients = [
        { id: 1, name: 'Briar Heart' },
        { id: 2, name: 'Beehive' },
        { id: 3, name: 'Deadra Heart' },
        { id: 4, name: 'Red Mountain Flower' },
        { id: 5, name: 'Troll Fat' }
    ];

    return (
        <AppView>
            <FlatList 
                data={ingredients}
                renderItem={({item}) => 
                <ListItem 
                key={item.id} 
                title={item.name} 
                clickHandler={() => navigation.navigate('IngredientDetails', { ingredientId: item.id, ingredientName: item.name})} 
            />}
            />
        </AppView>
    );
}

IngredientSearch.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};