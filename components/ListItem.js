import React from 'react';
import { Pressable, Text } from 'react-native';
import { general } from '../branding/styles';
import PropTypes from 'prop-types';

export const ListItem =({title, onPress}) => {
    return (
        <Pressable style={general.listItem} onPress={onPress}>
            <Text style={general.listText}>{title}</Text>
        </Pressable>
    )
}

ListItem.propTypes = {
    /** title to display on the list item */
    title: PropTypes.string.isRequired,
    /** Handler for Press actions on the list item */
    onPress: PropTypes.func
};