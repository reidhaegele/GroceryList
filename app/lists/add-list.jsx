import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ExpoRequest, ExpoResponse } from 'expo-router/server'

export default function AddList ({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
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
  });
  