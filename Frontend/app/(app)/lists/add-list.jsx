import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import Colors from "@/constants/Colors";
import { useTheme } from "@/components/navigation/ThemeContext";
import { Text } from "react-native";
import { TextInput, Button } from "react-native";
import { InputField } from "@/components/InputField";
import { getItem, getItemAsync, setItemAsync } from "expo-secure-store";
import axios from "axios";
import { router } from "expo-router";

BASE_URL = "http://127.0.0.1:8000"

export default function AddList ({navigation}) {
    const [joiningList, setJoiningList] = useState(false);
    const { isDarkMode } = useTheme();
    const [listInput, setListInput] = useState('')
    const [error, setError] = React.useState(' ');
    const [ userData, setUserData] = useState({firstname: '', lastname: '', email: '', username: ''});

    const getAccountInfo = async () => {
        const token = await getItemAsync('token');
        const result = await axios.get(`${BASE_URL}/api/accountInfo/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then((res) => {
            let data = JSON.parse(res.data)
            setUserData({firstname: data.first_name, lastname: data.last_name, email: data.email, username: data.username});
            return res.data
        })
        .catch((error) => {
            console.error(error.response.data)
        });
        return result; 
    }

    const handleSubmit = () => {
        getAccountInfo()
        if (joiningList) {
            // Joining List
            console.log("Joining List")
            try {
                listID = Number(listInput)
                console.log(userData.username)
                console.log(listID)
                const joinList = async () => {
                    const token = await getItemAsync('token');
                    const result = await axios.post(`${BASE_URL}/joinList/`,
                        {
                            user: userData.username,
                            listID: listID
                        },{
                            headers: {
                                'Authorization': `Token ${token}`
                            },
                        }).then( (res) => {
                        console.log(res.data.success)
                        router.back()
                    }).catch( (e) => {
                        console.log("error")
                        console.log(e.response.data.error)
                        setError(e.response.data.error)
                    })
                    return result
                }
                joinList()
            } catch(err) {
                console.log("Error", err)
            }

        } else {
            // Creating List
            console.log("Creating List")
            console.log(userData.id)
            const createList = async () => {
                const token = await getItemAsync('token');
                const result = await axios.post(`${BASE_URL}/createList/`,
                    {
                        user: userData.username,
                        listName: listInput
                    },{
                        headers: {
                            'Authorization': `Token ${token}`
                        },
                    }).then( (res) => {
                    console.log(res.data.success)
                    router.back()
                }).catch( (e) => {
                    console.log("error")
                    console.log(e.response.data.error)
                    setError(e.response.data.error)
                })
                return result
            }
            createList()
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: Colors[isDarkMode?"dark":"light"].background, flex: 1}}>
            <View style={styles.container}>
                <Text style={[styles.sectionTitle, {color: Colors[isDarkMode?"dark":"light"].text}]}>{joiningList?"Join a List":"Create a List"}</Text>
                <Text style={styles.error}>{error}</Text>
                <InputField
                    placeholder={joiningList?"List ID":"List Name"}
                    value={listInput}
                    onChangeText={(val) => setListInput(val)}
                />
                <View style={styles.buttonField}>
                    <Button
                        title={joiningList?"Create List":"Join List"}
                        style={styles.button}
                        onPress={() => setJoiningList(!joiningList)}
                    />
                    <Button
                        title={joiningList?"Join List":"Create List"}
                        style={styles.button}
                        onPress={() => handleSubmit()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    sectionTitle: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonField: {
        flexDirection: "row",
        marginRight: "auto",
        marginLeft: "auto",
    },
    button: {
        backgroundColor: "red",
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
  });