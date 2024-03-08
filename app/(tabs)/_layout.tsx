import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, router } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabBarIconTest from '@/components/utils/TabBarIcon';
import { HeaderButtons } from '@/components/header_buttons/HeaderButtons';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@/components/navigation/ThemeContext';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider>
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
                shadowColor: "#f2f2f2",
                shadowOffset: {
                    width: 0,
                    height: 15,
                },
                shadowOpacity: 100,
                shadowRadius: 10,
            },
            headerTitleAlign: "left",
        }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
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
              tabBarIcon: ({ focused }) => <TabBarIconTest focused={focused} icon="list" />,
              headerRight: () => (
                <HeaderButtons 
                    buttons={[
                        {
                            icon: <Ionicons name="add-circle-outline" size={40}  />,
                            onpress: () => router.navigate('lists/AddList'),
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
                tabBarIcon: ({ focused }) => (
                    <TabBarIconTest focused={focused} icon="person" />
                  ),
                headerRight: () => ( <HeaderButtons buttons={[{icon: <Ionicons name="settings-outline" size={40} color="gray" />, onpress: () => router.navigate('/settings'), }, ]} /> ),
            }}
        />

      </Tabs>
    </ThemeProvider>
  );
}

