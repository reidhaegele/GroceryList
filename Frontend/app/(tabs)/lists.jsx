import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, Pressable, View} from "react-native";
import ListCard from "@/components/listcard/ListCard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButtons from "@/components/header_buttons/HeaderButtons";
import { useTheme } from "@/components/navigation/ThemeContext";
import Axios from "axios";


const Stack = createNativeStackNavigator();
BASE_URL = "http://127.0.0.1:8000"

export const List = () => {
        const { isDarkMode } = useTheme();
        const [lists, setlists] = useState([
            {
                list_id: '1',
                title: 'List A',
                color: '#0085FF',
            },
            {
                list_id: '2',
                title: 'List B',
                color: '#00FFD1',
            },
            {
                list_id: '3',
                title: 'List C',
                color: '#0085FF',
            },
            {
                list_id: '4',
                title: 'List D',
                color: '#00FFD1',
            },
        ])
    const getLists = async () => {
        // Fetch lists from database
        // TODO: Test this function and ensure correct storage of lists
        // TODO: add get function for all user lists
        const result = await Axios.get(`${BASE_URL}/api/getLists/`);
        setlists(result.data);
        AsyncStorage.setItem('lists', JSON.stringify(result.data));
    }

    const colorOption = "#0085FF";
    return (
        <SafeAreaView style={[styles.container]}>
            {/* <FlatList
                data={lists}
                renderItem={({item}) => (
                    <ListCard title={item.title} color={item.color}/>
                )}
                style={styles.list}
            /> */}
            <View style={styles.background}>
                <FlatList
                data={lists}
                renderItem={({item}) => (
                    <ListCard title={item.title} color={item.color} style={styles.button}/>
                )}
                
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginTop: 10,
    },
    darkContainer: {
        backgroundColor: "#353535", // Dark background color
    },
    background: {
        backgroundColor: "#fffccc",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        
    },
    button: {
        width: "90%",
        height: "12%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 10,
        elevation: 3,
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
  });

export default List;