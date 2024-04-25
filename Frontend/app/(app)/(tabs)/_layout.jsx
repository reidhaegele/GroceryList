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
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <ThemeProvider value={DefaultTheme}>
        <Tabs
          screenOptions={{
            tabBarInactiveTintColor: Colors[isDarkMode?"dark":"light"].tabBarInactive,
            tabBarActiveTintColor: Colors[isDarkMode?"dark":"light"].tabBarActive,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: Colors[isDarkMode?"dark":"light"].background,
              shadowColor: Colors[isDarkMode?"dark":"light"].shadow,
              shadowOffset: {
                  width: 10,
                  height: 10,
              },
              shadowOpacity: 1,
              shadowRadius: 10,
              },
              headerTitleStyle: {
                  fontSize: 30,
                  fontWeight: "normal",
                  marginLeft: "3%",
                  color: Colors[isDarkMode?"dark":"light"].text,
              },
              headerStyle: {
                  backgroundColor: Colors[isDarkMode?"dark":"light"].background,
                  shadowColor: Colors[isDarkMode?"dark":"light"].background,
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 10,
              },
              headerTitleAlign: "left",
          }}>

          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <Ionicons name={'home'} size={30} style={{marginBottom: -10}} color={color}/>,
            }}
          />

          <Tabs.Screen
              name="lists"
              options={{
                title: 'My Lists',
                tabBarIcon: ({ color }) => <Ionicons name={'list'} size={30} style={{marginBottom: -10}} color={color}/>,
                headerRight: () => (
                  <HeaderButtons 
                      buttons={[
                          {
                              icon: <Ionicons name="add-circle-outline" size={40} color={Colors[isDarkMode?"dark":"light"].tint}/>,
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
                  tabBarShowLabel: false,
                  tabBarIcon: ({ color }) => <Ionicons name={'person'} size={30} style={{marginBottom: -10}} color={color}/>,
                  headerRight: () => (
                    <HeaderButtons 
                      buttons={
                        [
                          {
                            icon: <Ionicons name="settings-outline" size={40} color={Colors[isDarkMode?"dark":"light"].tint} />, 
                            onpress: () => router.navigate('/settings'),
                          },
                        ]
                      }
                    />
                  ),
              }}
          />
          
        </Tabs>
    </ThemeProvider>
  );
}

