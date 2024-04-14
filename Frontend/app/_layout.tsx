import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Slot } from 'expo-router'; 
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { ThemeProvider } from '@/components/navigation/ThemeContext';
// import { DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import { HeaderButtons } from '@/components/header_buttons/HeaderButtons';
import { useTheme } from "@/components/navigation/ThemeContext";
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '@/components/Themed';

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

  return <ThemeProvider><RootLayoutNav /></ThemeProvider>;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const isDarkMode = useTheme();
  return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors[isDarkMode["isDarkMode"]?'dark':'light'].background,
          },
          headerTitleStyle: {
            color: Colors[isDarkMode["isDarkMode"]?'dark':'light'].text,
          },
          headerShadowVisible: false,
        }}
      >
        {/* <Stack.Screen name='(onboarding)' options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen
          name="lists/add-list"
          options={{
            title: 'Add List',
            presentation: 'modal',
          }}
        />
      </Stack>
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

