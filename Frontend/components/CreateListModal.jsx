import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function CreateListModal({modalVisible, children, onClose}) {
    return (
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.text}>Create a new list</Text>
                    <Pressable onPress={onClose}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )

}



const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',

    },
    modal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    text: {
        fontSize: 20,
        marginBottom: 20
    }
})