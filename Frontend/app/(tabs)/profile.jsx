import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useTheme } from "@/components/navigation/ThemeContext";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { UserInfoRow } from "@/components/profile/UserInfoRow";

export default function Profile() {
    const { isDarkMode } = useTheme();
    const goToSettings = () => {
        router.navigate("settings");
    };
    return (
        <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <View style={styles.iconContainer}>
                <FontAwesome name="user-circle" size={100} color="grey" />
                <Text style={[styles.iconText, isDarkMode && styles.darkText]}>Joe Miner</Text>
            </View>
            <UserInfoRow iconName="user" infoTypeText="Name" rowText="Joe Miner" />
            <UserInfoRow iconName="address-card" infoTypeText="Username" rowText="digdeeper24" />
            <UserInfoRow iconName="id-badge" infoTypeText="User ID" rowText="1234" />
            <UserInfoRow iconName="envelope" infoTypeText="Email" rowText="joeminer@mst.edu" />
        </ScrollView>
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
        fontSize: 30,
        fontWeight: 600,
        marginTop: 10,
    },
});