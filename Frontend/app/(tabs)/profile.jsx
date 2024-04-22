import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "@/components/navigation/ThemeContext";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from '@/components/AuthContext';
import { BASE_URL } from "../../constants/Database";
import { getItem, getItemAsync, setItemAsync } from 'expo-secure-store';
import axios from 'axios';

export default function Profile() {
    const { isDarkMode } = useTheme();
    const { authState } = useAuth(); 
    const [ userData, setUserData] = useState({firstname: '', lastname: '', email: '', username: ''});
    const goToSettings = () => {
        router.navigate("settings");
    };
    
    useEffect(() => {
        if (!authState) {
            router.replace('/login');
        }

        if (userData.firstname === '' && userData.lastname === '' && userData.email === '') {
            getAccountInfo();
            setUserData({firstname: data.firstname, lastname: data.lastname, email: data.email, username: data.username});
        }
        else {
            const data = getItem('userInfo');
            console.log(data);
        }
    })
    const getAccountInfo = async () => {
        const token = await getItemAsync('token');
        const result = await axios.get(`${BASE_URL}/api/accountInfo/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then((res) => {
            console.log("GET ACCOUNT INFO");
            console.log(res.data);
            let data = JSON.parse(res.data)
            setUserData({firstname: data.first_name, lastname: data.last_name, email: data.email, username: data.username});
            setItemAsync('userInfo', JSON.stringify(data));
            return res.data

        })
        .catch((error) => {

            console.error(error.response)
            console.error(error.response.data)
        });
        return result; 
    }
    
    return (

        
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <View style={styles.iconContainer}>
                <FontAwesome name="user-circle" size={100} color="grey" />
                <Text style={[styles.iconText, isDarkMode && styles.darkText]}>{`${userData.firstname} ${userData.lastname}`}</Text>
            </View>
            <View style={styles.mailIconContainer}>
                <FontAwesome name="envelope" size={24} color="grey" />
                <Text style={[styles.mailIconText, isDarkMode && styles.darkText]}>{`${userData.email}`}</Text>
            </View>
            <View style={styles.userIconContainer}>
                <FontAwesome name="user" size={30} color="grey" />
                <Text style={[styles.mailIconText, isDarkMode && styles.darkText]}>{`${userData.username}`}</Text>
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

    userIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: "100%",
    },
});