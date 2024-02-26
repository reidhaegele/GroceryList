import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { Text } from "react-native-rapi-ui";
import PriceChangeNotification from "../components/home/PriceChangeNotification";
import ItemAddedNotification from "../components/home/ItemAddedNotification";

// TODO: feed in notifications array so that we may map that inside the ScrollView component

export default function () {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionTitle}>Home</Text>
            <ScrollView contentContainerStyle={styles.notificationsContainer}>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      sectionTitle: {
        fontSize: 30, 
        fontWeight: "bold", 
        marginBottom: 10,
        paddingLeft: 15, 
        textAlign: "left",
        borderBottomColor: 'black'
      },
      notificationsContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center'
      }
  });
  