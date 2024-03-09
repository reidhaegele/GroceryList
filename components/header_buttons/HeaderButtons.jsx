import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { AntDesign } from '@expo/vector-icons';

export const HeaderButtons = (props, {navigation}) => {
    const { isDarkmode } = useTheme();
    
    return (
        <View style={styles.container}>
            {props.buttons.map((button, index) => (
                <TouchableOpacity
                    style={styles.button}
                    onPress={button.onpress}
                    key={index}
                >
                    <Text>
                        {button.icon}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: "7%",
    },
    button: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: 20,
        marginRight: 5,
    },
})