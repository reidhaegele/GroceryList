import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../utils/TabBarIcon";
import { ThemeProvider } from "./ThemeContext";

// Screens
import Home from "../../screens/Home";
import Lists from "../../screens/Lists";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings"

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const MainTabs = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                shadowColor: "gray",
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 10,
                },
            }}
        >
        <Tabs.Screen
            name="Home"
            component={Home}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} icon="home" />
                  ),
            }}
        />
        <Tabs.Screen
            name="List"
            component={Lists}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} icon="list" />
                  ),
            }}
        />
        <Tabs.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} icon="person" />
                  ),
            }}
        />
        </Tabs.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Profile">
                    <Stack.Screen
                        name="Profile"
                        component={MainTabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{ title: "Settings" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default AppNavigator;