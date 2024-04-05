import { View, Text, Button, Image, StyleSheet} from 'react-native';
import React from 'react';
import { EmailField, PasswordField, InputField } from '@/components/InputField';
import { GrayButton, BlueButton} from '@/components/MyButton';
import Container from '@/components/Container';
import Separator from '@/components/Separator';
import { Link, router } from 'expo-router';
import axios from 'axios';

// TODO: Import correct base_url
// TODO: Add pop up for successful registration
// TODO: Direct user to home with authentication context
// BASE_URL="https://be4e0267-8202-42e5-afbc-5b74fcbfbf9b.mock.pstmn.io"
BASE_URL = "http://127.0.0.1:8000"

export default function Login() {
    const [username, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    const register = () => {
        console.log('register');
        router.replace('/register');
        router.replace('/register');
    }
    
    const login = async () => {
    const login = async () => {
        console.log('login');
        axios.post(`${BASE_URL}/api/login/`, {
                username,
                password
            })
            .then(res => {
                let userInfo = res.data;
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`login failed ${e}`);
            });
        router.navigate('/');
    };

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <InputField name={"user"} value={username} placeholder={"Username"} onChangeText={(text) => setUser(text)}/>
            <PasswordField name={"password"} value={password} onChangeText={(text) => setPassword(text)}/>
            <BlueButton title="Log In" onPress={login} ></BlueButton>
            <Separator text="Or"/>
            <GrayButton title="Sign Up" onPress={register}></GrayButton>
        </View>
        
    )
}

}

const styles = StyleSheet.create ({


    container: {
        width: '100%',
        height: '65%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '65%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#ffffff',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        bottom: 0,
        position: 'absolute',
    }, 
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 30,
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