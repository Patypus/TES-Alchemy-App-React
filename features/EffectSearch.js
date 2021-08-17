import React from "react";
import { AppView, ElementList } from '../components';

export const EffectSearch = () => {
    const ingredients = [
        { id: 1, name: 'Fortify Magika' },
        { id: 2, name: 'Restore Stamina' },
        { id: 3, name: 'Waterbreathing' },
        { id: 4, name: 'Invisibility' },
        { id: 5, name: 'Ravage Magika' }
    ];

    return (
        <AppView>
            <ElementList items={ingredients}/>
        </AppView>
    );
}