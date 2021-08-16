import React, { useState } from "react";
import { FlatList } from 'react-native';
import { ListItem } from './ListItem'

export const ElementList = () => {
    const [items, setItems] = useState([
        { id: 1, name:  'item one'},
        { id: 2, name:  'item two'},
        { id: 3, name:  'item three'},
        { id: 4, name:  'item four'}
    ]);

    return (
        <FlatList 
            data={items}
            renderItem={({item}) => <ListItem key={item.id} title={item.name} />}
         />
    );
}