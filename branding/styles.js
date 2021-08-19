import { StyleSheet } from 'react-native';

export const general = StyleSheet.create({
    background: {
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFF'
    },
    listItem: {
        backgroundColor: '#3A3A33',
        elevation: 3,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 4,
        width: '100%',
        marginTop: 3
    },
    listText: {
        color: '#FFF',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#282828',
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
        backgroundColor: '#282828',
        alignItems: 'center'
    }
});
