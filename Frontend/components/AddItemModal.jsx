import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';


export default function AddItemModal ({visible, onClose}) {
    return (
        <View style={styles.centeredView}>
            <Modal style={styles.modal} animationType="slide" transparent={true} visible={visible} hardwareAccelerated={true}>
                <View style={styles.x}>
                    <Text>Add an Item</Text>
                    <Pressable onPress={onClose}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}


styles = StyleSheet.create({

    modal: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50%',
      width: '80%',
      backgroundColor: 'white',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})