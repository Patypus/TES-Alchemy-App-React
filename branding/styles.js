import { StyleSheet } from 'react-native';

export const general = StyleSheet.create({
    background: {
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25
    },
    list: {
        width: '80%',
        marginBottom: 5
    },
    listItem: {
        backgroundColor: '#3D3D3D',
        shadowColor: '#000000',
        elevation: 5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
        width: '100%',
        marginTop: 5
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
        marginTop: 15,
        width: '60%'
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
    },
    inline: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
