import { Redirect, Slot, Stack } from 'expo-router';
import { useAuth } from '@/components/AuthContext';
import { Screen } from 'expo-router/build/views/Screen';
import Colors from '@/constants/Colors';
import { useTheme } from "@/components/navigation/ThemeContext";

export default function AppLayout() {
    const {authState} = useAuth();
    const { isDarkMode } = useTheme();

    if (!authState) {
        console.log('NOT AUTHENTICATED')
        return <Redirect href="/(onboarding)/welcome" />
    }

    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: "normal",
                    color: Colors[isDarkMode?"dark":"light"].text,
                },
                headerStyle: {
                    backgroundColor: Colors[isDarkMode?"dark":"light"].background,
                },
                headerTintColor: Colors[isDarkMode?"dark":"light"].tint,
                headerBackTitle: "\0",
                headerShadowVisible: false,
                headerShown: false,
            }}
        >
            <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
            <Stack.Screen name='lists/add-list' options={{title: 'Add a new List', headerShown: true, presentation: 'modal'}}/>
            <Stack.Screen name='settings' options={{title: 'Settings', headerShown: true}}/>
        </Stack>
    )
}