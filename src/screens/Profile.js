import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-rapi-ui";
import { useTheme } from "../components/navigation/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    const { isDarkMode } = useTheme();
    const navigation = useNavigation();
    const goToSettings = () => {
        navigation.navigate("Settings");
    };
    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Profile</Text>
                <TouchableOpacity onPress={goToSettings} style={styles.settingsButton}>
                    <Ionicons name="settings-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        width: "100%",
    },
    settingsButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "lightgray",
    },
});