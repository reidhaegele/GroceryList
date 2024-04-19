import { View, Text, Button, Modal } from 'react-native';
import React from 'react';
import { EmailField, PasswordField, InputField } from '@/components/InputField';
import { GrayButton, BlueButton} from '@/components/MyButton';
import { StyleSheet } from 'react-native';
import Container from '@/components/Container';
import Separator from '@/components/Separator';
import { Link, router, Stack } from 'expo-router';
import { NameIcon } from '@/components/Icons';
import axios from 'axios';


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
    const [error, setError] = React.useState(' ');
    


    const register = async () => {
        console.log('register')
        axios.post("http://127.0.0.1:8000/api/register/", {
                email,
                password,
                username,
                firstname,
                lastname
            })
            .then(res => {
                let response = res.data;
                console.log(response);
                router.replace('/');
            })
            .catch(e => {
                console.log(`register failed ${e}`);
                console.log(JSON.stringify(e))
            });
    }

    
    const login = () => {
        console.log('login')
        router.replace('/login')
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={true}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.error}>{error}</Text>
                <InputField label={"firstname"} placeholder={"First Name"} value={firstname} onChangeText={(text) => setFirstname(text)}/>
                <InputField label={"lastname"} placeholder={"Last Name"} value={lastname} onChangeText={(text) => setLastname(text)}/>
                <InputField label={"username"} placeholder={"username"} value={username} onChangeText={(text) => setUsername(text)}/>
                <EmailField name={"email"} value={email} onChangeText={(text) => setEmail(text)}/>
                <PasswordField name={"password"} value={password} onChangeText={(text) => setPassword(text)}/>
                <BlueButton title="Sign Up" onPress={register}></BlueButton>
                <Separator text="Or"/>
                <GrayButton title="Log In" onPress={login}></GrayButton>           
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