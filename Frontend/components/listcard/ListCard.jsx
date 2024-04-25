import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { router } from "expo-router";

export default (props) => {
    const { isDarkMode } = useTheme();
    const onPress = async () => {
        console.log("Navigating to list")
        router.navigate(`lists/${props.listID}`)
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, isDarkMode && styles.darkContianer]}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0085FF",
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
