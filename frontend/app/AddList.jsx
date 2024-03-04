import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function ({navigation}) {

    React.useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 40,}}>
                <AntDesign name="left" size={30} color="gray" />
            </TouchableOpacity>
            ),
        });
    }, [navigation]);

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
  