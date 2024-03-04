import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../utils/TabBarIcon";

// Screens
import Home from "../../screens/Home";
import Lists from "../../screens/Lists";
import Profile from "../../screens/Profile";
import { Button } from "react-native-rapi-ui";
import { TouchableOpacity } from "react-native";

const Tabs = createBottomTabNavigator();
const HomeTabs = () => {
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

export default () => {
    return (
        <HomeTabs />
    )
};