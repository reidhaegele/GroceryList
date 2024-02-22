import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";
import { useTheme } from "../components/navigation/ThemeContext";

export default function Home() {
    const { isDarkMode } = useTheme();

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={styles.sectionTitle}>Home</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", // Default light background color
    },
    darkContainer: {
        backgroundColor: "grey", // Dark background color
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        textAlign: "left",
        color: "black", // Default text color
    },
});
  