import React from "react";
import { AppView, ElementList } from '../components';

export const IngredientSearch = () => {
    const ingredients = [
        { id: 1, name: 'Briar Heart' },
        { id: 2, name: 'Beehive' },
        { id: 3, name: 'Deadra Heart' },
        { id: 4, name: 'Red Mountain Flower' },
        { id: 5, name: 'Troll Fat' }
    ];

    return (
        <AppView>
            <ElementList items={ingredients}/>
        </AppView>
    );
}