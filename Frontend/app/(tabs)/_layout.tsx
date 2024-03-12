import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, router } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabBarIcon from '@/components/utils/TabBarIcon';
import { HeaderButtons } from '@/components/header_buttons/HeaderButtons';
import { Ionicons } from '@expo/vector-icons';
import {ThemeProvider,DefaultTheme,} from "@react-navigation/native";


export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider value={DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
          tabBarShowLabel: false,
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
            },
            headerTitleAlign: "left",
        }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "normal",              
            },
            tabBarIcon: ({ focused }) => <TabBarIcon icon="home" focused={focused} />,
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />

        <Tabs.Screen
            name="lists"
            options={{
              title: 'Lists',
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: "normal",              
              },
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon="list"/>,
              headerRight: () => (
                <HeaderButtons 
                    buttons={[
                        {
                            icon: <Ionicons name="add-circle-outline" size={40}  />,
                            onpress: () => router.navigate('lists/add-list'),
                        },
                    ]}
                />
              ),
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: "normal",              
                },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} icon="person" />
                  ),
                headerRight: () => ( <HeaderButtons buttons={[{icon: <Ionicons name="settings-outline" size={40} color="gray" />, onpress: () => router.navigate('/settings'), }, ]} /> ),
            }}
        />

      </Tabs>
    </ThemeProvider>
  );
}

