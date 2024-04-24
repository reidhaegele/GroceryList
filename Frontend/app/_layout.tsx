import { Slot } from 'expo-router'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { ThemeProvider } from '@/components/navigation/ThemeContext';
import { AuthProvider, useAuth } from '@/components/AuthContext';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '',
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
        <Slot />
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

