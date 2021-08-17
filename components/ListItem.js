import React from 'react';
import { Button, Text, View } from 'react-native';
import { general } from '../branding/styles';
import PropTypes from 'prop-types';

export const ListItem =({title, clickHandler}) => {
    return (
        <View>
            <Text style={general.text}>{title}</Text>
            <Button 
                onPress={clickHandler}
                title={title}
                accessibilityLabel={title}
                />
        </View>
    )
}

ListItem.propTypes = {
    /** title to display on the list item */
    title: PropTypes.string.isRequired,
    /** Click handler for the action button on the list item */
    clickHandler: PropTypes.func.isRequired
};