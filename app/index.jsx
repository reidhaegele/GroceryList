import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function () {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Text this </Text>
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
        marginBottom: 7, 
        textAlign: "left",
      },
  });
  