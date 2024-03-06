import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text} from "react-native";
import ListCard from "@/components/listcard/ListCard";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButtons from "@/components/header_buttons/HeaderButtons";

const Stack = createNativeStackNavigator();

export const List = ({navigation}) => {

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



    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={styles.sectionTitle}>Lists</Text>
            <FlatList
                data={lists}
                renderItem={({item}) => (
                    <ListCard title={item.title} color={item.color}/>
                )}
                style={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
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
  });

export default List;