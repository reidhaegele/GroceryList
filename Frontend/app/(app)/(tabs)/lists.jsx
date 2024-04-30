import React, { useState, useCallback } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, Pressable, View, Modal} from "react-native";
import ListCard from "@/components/listcard/ListCard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderButtons from "@/components/header_buttons/HeaderButtons";
import Colors from '@/constants/Colors';
import { useTheme } from "@/components/navigation/ThemeContext";
import axios from "axios";
import  NewListButton  from "@/components/NewListButton";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import { useFocusEffect } from '@react-navigation/native';
import  CreateListModal  from "@/components/CreateListModal";
// const Stack = createNativeStackNavigator();
import { BASE_URL } from '../../../constants/Database'
import AddList from "@/components/add-list";


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

    const onCardPress = (id) => {
        console.log("Navigating to list with ID: ", props.listID)
        router.navigate(`${BASE_URL}/lists/${id}`)
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
                key={(item) => item.listId}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={({item}) => (
                    <ListCard title={item.listName} listID={item.listId} color={colorOption} />
                )}
                ListFooterComponent={<NewListButton onPress={() => onPress}/>}
                ListFooterComponentStyle={{marginTop: 25, alignItems: 'center'}}
            />
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
                <View style={[styles.modalContainer, {backgroundColor:  Colors[isDarkMode?"dark":"light"].background}]}>
                    <View style={[styles.modal, {backgroundColor:  Colors[isDarkMode?"dark":"light"].background}]}>
                        <AddList/>
                        <Pressable style={styles.button} onPress={onClose}>
                            <Text style={styles.buttonText}>Close</Text>
                        </Pressable>
                    </View>
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
        height: '40%',
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
    },
    
    text: {
        fontSize: 20,
        marginBottom: 20
    }, 
    
    button: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    }, 

    buttonText: {
        color: 'white',
        fontSize: 16,
    }
  });

export default List;