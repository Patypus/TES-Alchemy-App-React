import React from "react";
import PropTypes from 'prop-types';
import { AppView, ListItem } from '../components';
import { FlatList } from 'react-native';

export const EffectSearch = ({navigation}) => {
    const effects = [
        { id: 1, name: 'Fortify Magika' },
        { id: 2, name: 'Restore Stamina' },
        { id: 3, name: 'Waterbreathing' },
        { id: 4, name: 'Invisibility' },
        { id: 5, name: 'Ravage Magika' }
    ];

    return (
        <AppView>
            <FlatList 
                data={effects}
                renderItem={({item}) => 
                    <ListItem 
                        key={item.id} 
                        title={item.name} 
                        clickHandler={() => navigation.navigate('EffectDetails', { effectName: item.name})} 
                    />}
            />
        </AppView>
    );
}

EffectSearch.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};