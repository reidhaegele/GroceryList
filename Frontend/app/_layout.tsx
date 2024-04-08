import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Slot } from 'expo-router'; 
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useContext } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { ThemeProvider } from '@/components/navigation/ThemeContext';
// import { DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import { AuthProvider, useAuth, AuthContextType } from '@/components/AuthContext';
import { View, ActivityIndicator } from 'react-native';

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
  const {authState, onLogout} = useAuth();

  return (
    <AuthProvider>
      <ThemeProvider>
        <Stack>
          {/* FIXME: If user is not logged in display the onboarding screens, otherwise show the tabs layout */}
          {authState?.authenticated ? (
            <Stack.Screen name='(onboarding)' options={{ headerShown: false }} /> 
          ):(
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
          )
          }
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
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

