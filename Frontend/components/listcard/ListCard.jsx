import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { router } from "expo-router";
import { BASE_URL } from "../../constants/Database";

export default ({onPress, title, listID}) => {
    const { isDarkMode } = useTheme();
    const onCardPress = () => {
        console.log("Navigating to list with ID: ", listID)
        router.push(`/lists/${listID}`)
    }

    return (
        <TouchableOpacity
            onPress={onCardPress}
            style={[styles.container, isDarkMode && styles.darkContianer]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#447F86",
        borderRadius: 7,
        height: 63,
        width: "90%",
        marginTop: 25,
        marginRight: "auto",
        marginLeft: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    title: {
        fontSize: 30, 
        textAlign: "left",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "5%",
    },
    darkContainer: {
        backgroundColor: "#353535",
    },
    darkText: {
        color: "white",
    },
  });
