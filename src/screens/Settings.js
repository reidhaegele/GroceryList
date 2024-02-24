import React from "react";
import { SafeAreaView, StyleSheet, Switch, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../components/navigation/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function Settings() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const navigation = useNavigation();

    const goToStores = () => {
        navigation.navigate("Stores");
    };

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <View style={styles.boxContainer}>
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
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Toggle</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Toggle</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Toggle</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
            </View>
            <TouchableOpacity onPress={goToStores} style={styles.boxContainer}>
                <Text style={styles.label}>My Stores</Text>
                <FontAwesome name="chevron-right" size={20} color="grey" />
            </TouchableOpacity>
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
    label: {
        fontSize: 20,
    },
    darkText: {
        color: "white", // Dark text color
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    boxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#e0e0e0",
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
    },
});