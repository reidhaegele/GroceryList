import { View, Text, Button, Image, StyleSheet} from 'react-native';
import React from 'react';
import { EmailField, PasswordField } from '@/components/InputField';
import { GrayButton, BlueButton} from '@/components/MyButton';
import Container from '@/components/Container';
import Separator from '@/components/Separator';
import { Link, router } from 'expo-router';


// TODO: add functionality to buttons and input fields
// TODO: Autosized containers


export default function Page() {
    const register = () => {
        console.log('register');
        router.replace('/register')
    }
    
    const login = () => {
        console.log('login');
    }

    return (
        
        <View>
            <Text style={styles.title}>Log In</Text>
            <EmailField>Text</EmailField>
            <PasswordField>Text</PasswordField>
            <BlueButton title="Log In" onPress={() => login}></BlueButton>
            <Separator text="Or"/>
            <GrayButton title="Sign Up" onPress={() => register}></GrayButton>
        </View>
        
    )
}



const styles = StyleSheet.create ({

    container: {
        width: '100%',
        height: '56%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }, 
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    circleLogo: {
        height: 273,
        width: 273,
        borderRadius: 50,
        backgroundColor: 'black',
        marginBottom: 20,
    }, 
    background: {
        flex: 1, 
        resizeMode: 'cover',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    
});