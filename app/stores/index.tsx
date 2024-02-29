import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useTheme } from "@/components/navigation/ThemeContext";

export default function () {
    const { isDarkMode } = useTheme();

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", // Default light background color
    },
    darkContainer: {
        backgroundColor: "#353535", // Dark background color
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        textAlign: "left",
        color: "black", // Default text color
    },
    darkText: {
        color: "white", // Dark text color
    },
});