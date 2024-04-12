import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212'
    },
    user: {
        backgroundColor: '#1f1b24',
        width: 250,
        padding: 15,
        borderRadius: 10
    },
    txt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500'
    },
    userActions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20
    },
    editButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7c5295',
        padding: 10,
        borderRadius: 10,
        width: 75
    },
    buttonTxt: {
        color: '#fff'
    }
})

export default styles;