import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default (props) => {
    const { isDarkmode } = useTheme();
    return (
        <Ionicons
            name={props.icon}
            size={30}
            style={{marginBottom: -10}}
            color={
                props.focused
                ? isDarkmode
                    ? themeColor.white100
                    : "black"
                : "rgb(143, 155, 179)"
            }
        />
    )
}