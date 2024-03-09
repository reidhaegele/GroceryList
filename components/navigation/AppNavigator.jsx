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
import Settings from "../../screens/Settings";
import Stores from "../../screens/Stores";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const HomeTabs = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: true,
                tabBarStyle: {
                shadowColor: "gray",
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 1,
                shadowRadius: 10,
                },
                headerTitleStyle: {
                    fontSize: 40,
                    fontWeight: "normal",
                    marginLeft: "3%",
                },
                headerStyle: {
                    backgroundColor: "#f2f2f2",
                    shadowColor: "#f2f2f2",
                    shadowOffset: {
                        width: 0,
                        height: 15,
                    },
                    shadowOpacity: 100,
                    shadowRadius: 10,
                },
                headerTitleAlign: "left",
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
            name="My Lists"
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
                    <Stack.Screen
                        name="Stores"
                        component={Stores}
                        options={{ title: "My Stores" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default AppNavigator;