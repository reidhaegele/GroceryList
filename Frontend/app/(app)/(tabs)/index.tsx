import { SafeAreaView, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { View } from "@/components/Themed";
import { useTheme } from "@/components/navigation/ThemeContext";

export default function Home() {
    const { isDarkMode } = useTheme();

    let adSource = "https://f.wishabi.net/flyers/42312235/1e69006e55cbc8f4.pdf";


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text
                    style={[
                        styles.headerText,
                        isDarkMode && styles.headerDarkText,
                    ]}
                >
                    {`Welcome,\nCheck out this week's deals:`}
                </Text>
            </View>
            <WebView 
                source={{ uri: adSource}} 
                originWhiteList={['*']}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        justifyContent: "center",
        height: 100,
        shadowColor: "black",
        borderBottomColor: "black",
        paddingTop: 40,
    },
    headerText: {
        textAlign: "left",
        justifyContent: "space-between",
        fontSize: 24,
        color: "#447F86",
        fontWeight: "bold",
        marginLeft: 10,
    },
    headerDarkText: {
        textAlign: "left",
        justifyContent: "space-between",
        fontSize: 24,
        color: "#447F86",
        fontWeight: "bold",
        marginLeft: 10,
    },
});
