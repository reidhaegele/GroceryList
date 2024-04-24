import { Redirect, Slot } from 'expo-router';
import { useAuth } from '@/components/AuthContext';
import { Screen } from 'expo-router/build/views/Screen';

export default function AppLayout() {
    const {authState} = useAuth();

    if (!authState) {
        console.log('NOT AUTHENTICATED')
        return <Redirect href="/(onboarding)/welcome" />
    }

    return (
        <Slot />
    )
}