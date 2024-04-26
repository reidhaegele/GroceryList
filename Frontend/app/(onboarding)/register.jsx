import { View, Text, Modal, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import { EmailField, PasswordField, InputField } from '@/components/InputField';
import { GrayButton, BlueButton} from '@/components/MyButton';
import { StyleSheet } from 'react-native';
import Separator from '@/components/Separator';
import { router } from 'expo-router';
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
    const [error, setError] = React.useState(' ');
    const { onRegister } = useAuth(); 

    const register = async () => {
        response = await onRegister(username, password, email, firstname, lastname)
        setError(response)
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
                <KeyboardAvoidingView
                behavior={Platform.OS === "ios"?"padding" : "height"}
                style={styles.keycontainer}
                >
                    <View style={styles.innercontainer}>
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.error}>{error}</Text>
                    <InputField label={"firstname"} placeholder={"First Name"} value={firstname} onChangeText={(text) => setFirstname(text)} />
                    <InputField label={"lastname"} placeholder={"Last Name"} value={lastname} onChangeText={(text) => setLastname(text)}/>
                    <InputField label={"username"} placeholder={"Username"} value={username} onChangeText={(text) => setUsername(text)}/>
                    <EmailField name={"email"} value={email} onChangeText={(text) => setEmail(text)}/>
                    <PasswordField name={"password"} value={password} onChangeText={(text) => setPassword(text)}/>
                    </View>
                </KeyboardAvoidingView>
                <View style={{backgroundColor: 'white', alignItems: 'center', paddingBottom: '10%', width: '100%'}}>
                    <BlueButton title="Sign Up" onPress={register}></BlueButton>
                    <Separator text="Or"/>
                    <GrayButton title="Log In" onPress={login}></GrayButton>
                </View>
            </View> 
        </Modal>
    )
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        height: "auto",
        justifyContent: 'flex-end',
        alignItems: "center",
    }, 
    innercontainer: {
        backgroundColor: 'white',
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: -20,
        },
        shadowOpacity: .2,
        shadowRadius: 10,
    },
    keycontainer: {
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "100%",
        zIndex: 1,
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
        margin: 15,
    },
});