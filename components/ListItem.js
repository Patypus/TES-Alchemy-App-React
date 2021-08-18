import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { general } from '../branding/styles';
import PropTypes from 'prop-types';

export const ListItem =({title, clickHandler}) => {
    return (
        <Pressable style={general.listItem} onPress={clickHandler}>
            <Text style={general.text}>{title}</Text>
        </Pressable>
    )
}

ListItem.propTypes = {
    /** title to display on the list item */
    title: PropTypes.string.isRequired,
    /** Click handler for the action button on the list item */
    clickHandler: PropTypes.func.isRequired
};