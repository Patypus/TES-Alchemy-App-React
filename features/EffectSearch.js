import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { AppView, ListItem } from '../components';
import { FlatList } from 'react-native';
import { getAllEffects, getDBConnection } from '../data/dbService';

export const EffectSearch = ({navigation}) => {
    const [loadedEffects, setLoadedEffects] = useState([]);

    const loadData = useCallback(async () => {
        const db = await getDBConnection();
        const results = await getAllEffects(db);
        setLoadedEffects(results);
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <AppView>
            <FlatList 
                data={loadedEffects}
                renderItem={({item}) => 
                    <ListItem 
                        key={item.EffectId} 
                        title={item.EffectName} 
                        clickHandler={() => navigation.navigate('EffectDetails', { effectName: item.EffectName})} 
                    />}
            />
        </AppView>
    );
}

EffectSearch.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};