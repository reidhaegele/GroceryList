import React from "react";
import { SafeAreaView, StyleSheet, Switch, View, Text, TouchableOpacity, Pressable } from "react-native";
import { useTheme } from "@/components/navigation/ThemeContext";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from '@/constants/Colors';
import { useAuth } from "@/components/AuthContext";

export default function Settings() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const { onLogout } = useAuth();

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

            <TouchableOpacity onPress={goToStores} style={[styles.boxContainer, {backgroundColor: Colors[isDarkMode?"dark":"light"].tinttwo}]}>
                <Text style={styles.label}>My Stores</Text>
                <FontAwesome name="chevron-right" size={20} color="grey" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.logoutButton]} onPress={onLogout} >
                <Text style={[styles.logoutText]}>Logout</Text>
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

    logoutButton: {
        backgroundColor: "red",
        width: "50%",
        padding: 10,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    }, 

    logoutText: {
        color: "black",
        fontSize: 25,
    }
});