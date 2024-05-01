import React, { useState, useCallback } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, Pressable, View, Modal, KeyboardAvoidingView, Platform } from "react-native";
import ListCard from "@/components/listcard/ListCard";
import Colors from '@/constants/Colors';
import { useTheme } from "@/components/navigation/ThemeContext";
import axios from "axios";
import  NewListButton  from "@/components/NewListButton";
import { getItemAsync, setItemAsync, getItem } from "expo-secure-store";
import { useFocusEffect } from '@react-navigation/native';
import { BASE_URL } from '../../../constants/Database'
import AddList from "@/components/add-list";
import { router, Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons } from '@/components/header_buttons/HeaderButtons';


export const List = () => {
    const { isDarkMode } = useTheme();
    const [lists, setLists] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [username, setUsername] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
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


    const onPress = () => {
        console.log("New List Button Pressed")
        setModalVisible(true);
    }

    const onClose = () => {
        console.log("Modal close")
        setModalVisible(false);
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
            <Stack.Screen
                options={{
                    headerRight: () => (
                        // <HeaderButtons 
                        //     buttons={[
                        //         {
                        //             icon: <Ionicons name="add-circle-outline" size={40} color={Colors[isDarkMode?"dark":"light"].tint}/>,
                        //             onPress: onPress,
                        //         },
                        //     ]}
                        // />
                        <Pressable style={{marginRight: 20}} onPress={onPress}><Ionicons name='add-circle-outline' size={40} color='gray' /></Pressable>
                      ),
                }}
            />
            <FlatList
                data={lists}
                key={(item) => item.listId}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={({item}) => (
                    <ListCard title={item.listName} listID={item.listId} color={colorOption} onPress={() => router.navigate({pathname: `${BASE_URL}/lists/${id}`, params: { listName: listName}})}/>
                )}
                ListFooterComponent={<NewListButton onPress={onPress}/>}
                ListFooterComponentStyle={{marginTop: 25, alignItems: 'center'}}
            />
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
                <View style={[styles.modalContainer, {backgroundColor:  Colors[isDarkMode?"dark":"light"].background}]}>
                    <KeyboardAvoidingView behvaior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.modal, {backgroundColor:  Colors[isDarkMode?"dark":"light"].background}]}>
                        <Pressable style={styles.button} onPress={onClose}>
                            <Text style={styles.buttonText}>X</Text>
                        </Pressable>
                        <AddList onClose={onClose}/>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
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

    modalContainer: {
        flex: 1,
        height: 'auto',
    },
    modal: {
        margin: 20,
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flex: 1,
        zIndex: 1,
    },
    
    text: {
        fontSize: 20,
        marginBottom: 20
    }, 
    
    button: {
        backgroundColor: 'red',
        borderRadius: 100,
        marginTop: 10,
        alignSelf: 'flex-end',
        marginRight: 20,
        width: 40,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
    
    }, 

    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
  });

export default List;