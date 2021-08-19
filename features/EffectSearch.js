import React, { useEffect, useCallback, useState } from "react";
import PropTypes from 'prop-types';
import { AppView, ListItem } from '../components';
import { FlatList } from 'react-native';
import { getAllEffects, getDBConnection } from '../data/dbService';
import { general } from '../branding/styles';

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
                style={general.list}
                data={loadedEffects}
                keyExtractor={(item) => item.id.toString()}
                initialNumToRender={20}
                renderItem={({item}) => 
                    <ListItem 
                        title={item.name} 
                        onPress={() => navigation.navigate('EffectDetails', { effectName: item.name})} 
                    />}
            />
        </AppView>
    );
}

EffectSearch.propTypes = {
    /** React navigation object for navigating between features */
    navigation: PropTypes.object
};