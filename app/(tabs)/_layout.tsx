import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, router } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabBarIconTest from '@/components/utils/TabBarIcon';
import { HeaderButtons } from '@/components/header_buttons/HeaderButtons';
import { AntDesign } from '@expo/vector-icons';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
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
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
              headerShown: true,
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: "normal",              
              },
              headerStyle: {
                  backgroundColor: "#f2f2f2",
                  height: 120,
                  justifyContent: 'flex-end',
              },
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => <TabBarIconTest focused={focused} icon="list" />,
              headerRight: () => (
                <HeaderButtons 
                    buttons={[
                        {
                            icon: <AntDesign name="pluscircleo" size={35} color="gray" />,
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
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIconTest focused={focused} icon="person" />
                  ),
            }}
        />

      </Tabs>
    </ThemeProvider>
  );
}



 

// export const HomeTabs = () => {
//     return (
        // <Tabs.Navigator
        //     screenOptions={{
        //         headerShown: true,
        //         tabBarStyle: {
        //         shadowColor: "gray",
        //         shadowOffset: {
        //             width: 10,
        //             height: 10,
        //         },
        //         shadowOpacity: 1,
        //         shadowRadius: 10,
        //         },
        //         headerTitleStyle: {
        //             fontSize: 40,
        //             fontWeight: "normal",
        //             marginLeft: "3%",
        //         },
        //         headerStyle: {
        //             backgroundColor: "#f2f2f2",
        //             shadowColor: "#f2f2f2",
        //             shadowOffset: {
        //                 width: 0,
        //                 height: 15,
        //             },
        //             shadowOpacity: 100,
        //             shadowRadius: 10,
        //         },
        //         headerTitleAlign: "left",
        //     }}
        // >
//         <Tabs.Screen
//             name="Home"
//             component={Home}
//             options={{
//                 tabBarShowLabel: false,
//                 tabBarIcon: ({ focused }) => (
//                     <TabBarIcon focused={focused} icon="home" />
//                   ),
//             }}
//         />
//         <Tabs.Screen
//             name="My Lists"
//             component={Lists}
//             options={{
//                 tabBarShowLabel: false,
//                 tabBarIcon: ({ focused }) => (
//                     <TabBarIcon focused={focused} icon="list" />
//                   ),
//             }}
//         />
//         <Tabs.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//                 tabBarShowLabel: false,
//                 tabBarIcon: ({ focused }) => (
//                     <TabBarIcon focused={focused} icon="person" />
//                   ),
//             }}
//         />
//         </Tabs.Navigator>
//     );
// };

// const MainTabs = () => {
//     return (
//         <Tabs.Navigator
//             screenOptions={{
//                 headerShown: false,
//                 tabBarStyle: {
//                 shadowColor: "gray",
//                 shadowOffset: {
//                     width: 10,
//                     height: 10,
//                 },
//                 shadowOpacity: 1,
//                 shadowRadius: 10,
//                 },
//             }}
//         >
//         <Tabs.Screen
//             name="Home"
//             component={Home}
//             options={{
//                 tabBarShowLabel: false,
//                 tabBarIcon: ({ focused }) => (
//                     <TabBarIcon focused={focused} icon="home" />
//                   ),
//             }}
//         />
//         <Tabs.Screen
//             name="List"
//             component={Lists}
//             options={{
//                 tabBarShowLabel: false,
//                 tabBarIcon: ({ focused }) => (
//                     <TabBarIcon focused={focused} icon="list" />
//                   ),
//             }}
//         />
//         <Tabs.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//                 tabBarShowLabel: false,
//                 tabBarIcon: ({ focused }) => (
//                     <TabBarIcon focused={focused} icon="person" />
//                   ),
//             }}
//         />
//         </Tabs.Navigator>
//     );
// };

// const AppNavigator = () => {
//     return (
//         <ThemeProvider>
//             <NavigationContainer>
//                 <Stack.Navigator initialRouteName="Profile">
//                     <Stack.Screen
//                         name="Profile"
//                         component={MainTabs}
//                         options={{ headerShown: false }}
//                     />
//                     <Stack.Screen
//                         name="Settings"
//                         component={Settings}
//                         options={{ title: "Settings" }}
//                     />
//                     <Stack.Screen
//                         name="Stores"
//                         component={Stores}
//                         options={{ title: "My Stores" }}
//                     />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </ThemeProvider>
//     );
// };

