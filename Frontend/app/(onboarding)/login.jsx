import { View, Text, Button, Image, StyleSheet, Modal} from 'react-native';
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
    const [error, setError] = React.useState(' ');

    const register = () => {
        console.log('register');
        router.replace('/register');
        router.replace('/register');
    }

    const login = async () => {
        console.log('login');
        axios.post(`${BASE_URL}/api/login/`, {
                username,
                password
            })
            .then(res => {
                let userInfo = res.data;
                console.log(userInfo);
                router.navigate('/');
            })
            .catch(e => {
                console.log(`login failed ${e}`);
                setError(e)
            });
    };

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={true}
        > 
            <View style={styles.container}>
                <Text style={styles.title}>Log In</Text>
                <Text style={styles.error}>{error}</Text>
                <InputField name={"user"} value={username} placeholder={"Username"} onChangeText={(text) => setUser(text)}/>
                <PasswordField name={"password"} value={password} onChangeText={(text) => setPassword(text)}/>
                <BlueButton title="Log In" onPress={login} ></BlueButton>
                <Separator text="Or"/>
                <GrayButton title="Sign Up" onPress={register}></GrayButton>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 'auto',
        backgroundColor: 'white',
        alignItems: 'center',
        height: "auto",
        width: "100%",
        borderRadius: 50,
        shadowColor: 'black',
        shadowOffset: 0,
        shadowOpacity: .3,
        shadowRadius: 10,
        paddingBottom: "10%",
    }, 
    title: {
        fontSize: 36,
        color: '#447F86',
        fontWeight: 'bold',
        marginTop: 20,
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
});