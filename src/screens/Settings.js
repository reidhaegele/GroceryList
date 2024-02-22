import React from "react";
import { SafeAreaView, StyleSheet, Switch, View, Dimensions } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";
import { useTheme } from "../components/navigation/ThemeContext";

export default function Settings() {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <View style={styles.switchContainer}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>
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
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "100%",
        marginBottom: 20,
    },
    label: {
        fontSize: 20,
    },
});