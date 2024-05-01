import { Text, View, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';



export default function NewListButton({onPress}) {


    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.title}>New List +</Text>
        </Pressable>

    )
}


const styles = StyleSheet.create({
    button : {
        flex: 1,
        backgroundColor: "#F5F4F4",
        borderRadius: 7,
        borderColor: "#d9d9d9",
        width: "90%",
        justifyContent: 'center',
        borderWidth: 1,
        height: 63,
    },

    title: {
        fontSize: 18, 
        textAlign: "center",
        color: "#787878",
    },
    darkContainer: {
        backgroundColor: "#353535",
    },
    darkText: {
        color: "white",
    },
  });
