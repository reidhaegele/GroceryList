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
import { useTheme } from "@/components/navigation/ThemeContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider value={DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
          headerShown: useClientOnlyValue(false, true),
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "normal",
            marginLeft: "3%",
            color: Colors[isDarkMode?'dark':'light'].text,
          },
          headerStyle: {
            backgroundColor: Colors[isDarkMode?'dark':'light'].background,
            shadowColor: Colors[isDarkMode?'dark':'light'].background,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 10,
          },
          headerTitleAlign: "left",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors[isDarkMode?'dark':'light'].background,
            shadowColor: Colors[isDarkMode?'dark':'light'].shadow,
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
          name="index"
          options={{
            title: 'Home',
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
              tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon="list"/>,
              headerRight: () => (
                <HeaderButtons 
                    buttons={[
                        {
                            icon: <Ionicons name="add-circle-outline" size={40} color={Colors[isDarkMode?'dark':'light'].tint} />,
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
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} icon="person" />
                  ),
                headerRight: () => ( 
                  <HeaderButtons
                    buttons={[
                      {
                        icon: <Ionicons name="settings-outline" size={40} color={Colors[isDarkMode?'dark':'light'].tint} />,
                        onpress: () => router.navigate('/settings'),
                      },
                    ]}
                  />
                ),
            }}
        />
        
      </Tabs>
    </ThemeProvider>
  );
}

