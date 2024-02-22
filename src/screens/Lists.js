import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-rapi-ui";

export default function () {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionTitle}>List</Text>
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
