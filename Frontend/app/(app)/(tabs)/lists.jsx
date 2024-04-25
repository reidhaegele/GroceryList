import React, { useState, useCallback } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, Pressable, View} from "react-native";
import ListCard from "@/components/listcard/ListCard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButtons from "@/components/header_buttons/HeaderButtons";
import Colors from '@/constants/Colors';
import { useTheme } from "@/components/navigation/ThemeContext";
import axios from "axios";
import  NewListButton  from "@/components/NewListButton";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import { useFocusEffect } from '@react-navigation/native';

// const Stack = createNativeStackNavigator();
BASE_URL = "http://127.0.0.1:8000"

export const List = () => {
    const { isDarkMode } = useTheme();
    const [lists, setLists] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [username, setUsername] = useState('');
    
    const onRefresh = async () => {
        setRefreshing(true);
        await seeLists().then(() => setRefreshing(false));
    }

    const getAccountInfo = async () => {
        const token = await getItemAsync('token');
        const result = await axios.get(`${BASE_URL}/api/accountInfo/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then((res) => {
            let data = JSON.parse(res.data)
            setUsername(data.username);
            return res.data
        })
        .catch((error) => {
            console.error(error.response.data)
        });
        return result; 
    }

    const seeLists = async () => {
        // Fetch lists from database
        // TODO: Test this function and ensure correct storage of lists
        // TODO: add get function for all user lists
        getAccountInfo()
        console.log('seeLists')
        const token = await getItemAsync('token');
        const result = await axios.get(`${BASE_URL}/seeLists/`,
            {
                headers: {
                    'Authorization': `token ${token}`
                },
                params: {
                    user: username
                }
            }).then((res) => {
                let data = res.data
                setLists(data);
            }).catch( (e) => {
                console.log('error', e)
            });
    }

    useFocusEffect(
        useCallback(() => {
          seeLists();
        }, [])
      );

    const colorOption = "#0085FF";
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: Colors[isDarkMode?"dark":"light"].background}]}>
            <FlatList
                data={lists}
                key={(item) => item.list_id}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={({item}) => (
                    <ListCard title={item.listName} listID={item.listId} color={colorOption}/>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    container2: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
    },
  });

export default List;