import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import Colors from "../../constants/Colors";
import { useTheme } from "@/components/navigation/ThemeContext";
import { Text } from "react-native";
import { TextInput, Button } from "react-native";
import { InputField } from "../../components/InputField";

export default function AddList ({navigation}) {
    const [joiningList, setJoiningList] = useState(false);
    const { isDarkMode } = useTheme();
    const [listInput, setListInput] = useState('')

    const handleSubmit = () => {
        if (joiningList) {
            // Joining List
            console.log("Joining List")
            try {
                listID = Number(listInput)
                console.log(listID)
            } catch(err) {
                console.log("Error", err)
            }

        } else {
            // Creating List
            console.log("Creating List")
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: Colors[isDarkMode?"dark":"light"].background, flex: 1}}>
            <View style={styles.container}>
                <Text style={[styles.sectionTitle, {color: Colors[isDarkMode?"dark":"light"].text}]}>{joiningList?"Join a List":"Create a List"}</Text>
                <InputField
                    placeholder={joiningList?"List ID":"List Title"}
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
  });
