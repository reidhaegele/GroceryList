import { Redirect, Stack, Slot } from 'expo-router';
import { AuthProvider, useAuth, AuthContextType } from '@/components/AuthContext';

export default function AppLayout() {
    const {authState} = useAuth();

    if (!authState?.authenticated) {
        console.log('NOT AUTHENTICATED')
        return <Redirect href="/(onboarding)/welcome" />
    }

    return <Slot />
}