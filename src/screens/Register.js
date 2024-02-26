import { View, Text, Button, Image} from 'react-native';
import React from 'react';
import { EmailField, PasswordField, NameInputField } from '@/components/InputField';
import { GrayButton, BlueButton} from '@/components/MyButton';
import { StyleSheet } from 'react-native';
import Container from '@/components/Container';
import Separator from '@/components/Separator';
import { Link, router } from 'expo-router';


// TODO: add functionality to buttons



export default function Page() {
    const register = () => {
        console.log('register');
        
    }
    
    const login = () => {
        console.log('login');
    }

    return (
        
        <View style={styles.container}>
            <Container>
                <Image 
                    style={styles.circleLogo}
                    source={require('@/assets/images/adaptive-icon.png')}
                    />
                <Text style={styles.title}>Log In</Text>
                <NameInputField />
                <NameInputField />
                <EmailField />
                <PasswordField />
                <BlueButton title="Sign Up" onPress={() => register}></BlueButton>
                <Separator text="Or"/>
                <GrayButton title="Log In" onPress={() => login}></GrayButton>
            </Container>
        </View>
        
    )
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddddd',
    }, 
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    circleLogo: {
        height: 273,
        width: 273,
        borderRadius: 50,
        backgroundColor: 'black',
        marginBottom: 20,
    }
    
});