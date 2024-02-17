import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../utils/TabBarIcon";

// Screens
import Home from "../../screens/Home";
import Lists from "../../screens/Lists";
import Profile from "../../screens/Profile";

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

export default () => {
    return (
     <NavigationContainer>
        <MainTabs />
     </NavigationContainer>   
    )
};