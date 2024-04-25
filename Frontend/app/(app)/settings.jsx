import React from "react";
import { SafeAreaView, StyleSheet, Switch, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/components/navigation/ThemeContext";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from '@/constants/Colors';

export default function Settings() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const goToStores = () => {
        router.navigate("stores");
    };

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: Colors[isDarkMode?"dark":"light"].background}]}>
            <View style={[styles.boxContainer, {backgroundColor: Colors[isDarkMode?"dark":"light"].tinttwo}]}>
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
            <View style={[styles.boxContainer, {backgroundColor: Colors[isDarkMode?"dark":"light"].tinttwo}]}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Toggle</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
            </View>
            <View style={[styles.boxContainer, {backgroundColor: Colors[isDarkMode?"dark":"light"].tinttwo}]}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Toggle</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
            </View>
            <View style={[styles.boxContainer, {backgroundColor: Colors[isDarkMode?"dark":"light"].tinttwo}]}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Toggle</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
            </View>
            <TouchableOpacity onPress={goToStores} style={[styles.boxContainer, {backgroundColor: Colors[isDarkMode?"dark":"light"].tinttwo}]}>
                <Text style={styles.label}>My Stores</Text>
                <FontAwesome name="chevron-right" size={20} color="grey" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        textAlign: "left",
    },
    label: {
        fontSize: 20,
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
        padding: 20,
        borderRadius: 10,
        marginTop: "5%",
        width: "90%",
        marginRight: "auto",
        marginLeft: "auto",
    },
});