import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import { Slot } from 'expo-router'; 
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded, error] = useFonts({
    'Ubuntu_400Regular': require('@/assets/fonts/Ubuntu-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}




function RootLayoutNav() {
  const colorScheme = useColorScheme();

  // const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText; 
  // const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings'}} />
        <Stack.Screen name="lists" options={{ title: 'Grocery Lists'}} />
      </Stack>
    </ThemeProvider>
  );
}


const styles = {
  lightThemeText: {
    color: 'black',
  },
  darkThemeText: {
    color: 'white',
  }, 
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: 'black',
  },
}








// Workspace: 

// const Stack = createNativeStackNavigator();
// const Tabs = createBottomTabNavigator();

// export const HomeTabs = () => {
//     return (
//         <Tabs.Navigator
//             screenOptions={{
//                 headerShown: true,
//                 tabBarStyle: {
//                 shadowColor: "gray",
//                 shadowOffset: {
//                     width: 10,
//                     height: 10,
//                 },
//                 shadowOpacity: 1,
//                 shadowRadius: 10,
//                 },
//                 headerTitleStyle: {
//                     fontSize: 40,
//                     fontWeight: "normal",
//                     marginLeft: "3%",
//                 },
//                 headerStyle: {
//                     backgroundColor: "#f2f2f2",
//                     shadowColor: "#f2f2f2",
//                     shadowOffset: {
//                         width: 0,
//                         height: 15,
//                     },
//                     shadowOpacity: 100,
//                     shadowRadius: 10,
//                 },
//                 headerTitleAlign: "left",
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

// export default AppNavigator;