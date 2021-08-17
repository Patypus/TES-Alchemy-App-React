import React, { useState } from "react";
import { FlatList } from 'react-native';
import { ListItem } from './ListItem'
import PropTypes from 'prop-types';

export const ElementList = ({items}) => {
    const [listItems, setListItems] = useState(items);

    return (
        <FlatList 
            data={listItems}
            renderItem={({item}) => <ListItem key={item.id} title={item.name} />}
         />
    );
}

ElementList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })).isRequired
  };