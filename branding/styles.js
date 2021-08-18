import { StyleSheet } from 'react-native';

export const general = StyleSheet.create({
    background: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFF'
    },
    listItem: {
        backgroundColor: '#3A3A33',
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#000',
        color: '#FFF',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        marginTop: 15
    },
    buttonText: {
        color: '#FFF',
        fontSize: 25,
        lineHeight: 30,
        letterSpacing: 0.25,
    },
    header: {
        backgroundColor: '#000',
        alignItems: 'center'
    }
});
