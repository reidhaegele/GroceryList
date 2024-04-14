import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "@/components/navigation/ThemeContext";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Colors from '@/constants/Colors';

export default function Profile() {
    const { isDarkMode } = useTheme();
    const goToSettings = () => {
        router.navigate("settings");
    };
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: Colors[isDarkMode?"dark":"light"].background}]}>
            <View style={styles.iconContainer}>
                <FontAwesome name="user-circle" size={100} color="grey" />
                <Text style={[styles.iconText, isDarkMode && styles.darkText]}>Joe Miner</Text>
            </View>
            <View style={styles.mailIconContainer}>
                <FontAwesome name="envelope" size={24} color="grey" />
                <Text style={[styles.mailIconText, isDarkMode && styles.darkText]}>joeminer@mst.edu</Text>
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