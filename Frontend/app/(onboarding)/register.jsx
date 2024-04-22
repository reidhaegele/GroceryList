import { View, Text, Button, ImageBackground } from 'react-native';
import React from 'react';
import { EmailField, PasswordField, InputField } from '@/components/InputField';
import { GrayButton, BlueButton} from '@/components/MyButton';
import { StyleSheet } from 'react-native';
import Container from '@/components/Container';
import Separator from '@/components/Separator';
import { Link, router, Stack } from 'expo-router';
import { NameIcon } from '@/components/Icons';
import axios from 'axios';
import { useAuth } from '@/components/AuthContext'

// TODO: Import correct base_url
// TODO: Add pop up for successful registration
// TODO: Direct user to home with authentication context
// BASE_URL="https://be4e0267-8202-42e5-afbc-5b74fcbfbf9b.mock.pstmn.io"
BASE_URL = "http://127.0.0.1:8000"

export default function Register() {
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { onRegister } = useAuth(); 

    const register = async () => {
        // console.log('register')
        // axios.post("http://127.0.0.1:8000/api/register/", {
        //         email,
        //         password,
        //         username,
        //         firstname,
        //         lastname
        //     })
        //     .then(res => {
        //         let response = res.data;
        //         console.log(response);
        //     })
        //     .catch(e => {
        //         console.log(`register failed ${e}`);
        //     });
        // router.replace('/login');
        onRegister(username, password, email, firstname, lastname)
    }

    
    const login = () => {
        console.log('login')
        router.replace('/login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <InputField label={"firstname"} placeholder={"First Name"} value={firstname} onChangeText={(text) => setFirstname(text)}/>
            <InputField label={"lastname"} placeholder={"Last Name"} value={lastname} onChangeText={(text) => setLastname(text)}/>
            <InputField label={"username"} placeholder={"username"} value={username} onChangeText={(text) => setUsername(text)}/>
            <EmailField name={"email"} value={email} onChangeText={(text) => setEmail(text)}/>
            <PasswordField name={"password"} value={password} onChangeText={(text) => setPassword(text)}/>
            <BlueButton title="Sign Up" onPress={register}></BlueButton>
            <Separator text="Or"/>
            <GrayButton title="Log In" onPress={login}></GrayButton>           
        </View>
    )
}



const styles = StyleSheet.create ({

    container: {
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
    }, 
    title: {
        fontSize: 36,
        fontWeight: 'bold',
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