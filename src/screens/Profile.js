import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-rapi-ui";
import { useTheme } from "../components/navigation/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
            <View style={styles.iconContainer}>
                <FontAwesome name="user-circle" size={100} color="grey" />
                <Text style={styles.iconText}>Joe Miner</Text>
            </View>
            <View style={styles.mailIconContainer}>
                <FontAwesome name="envelope" size={24} color="grey" />
                <Text style={styles.mailIconText}>joeminer@mst.edu</Text>
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
    },
    iconContainer: {
        alignItems: "center",
        marginTop: 30,
    },
    iconText: {
        fontSize: 20,
        marginTop: 10,
    },
    mailIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: "100%",
    },
    mailIconText: {
        fontSize: 20,
        marginLeft: 5,
        alignSelf: 'center',
    },
});