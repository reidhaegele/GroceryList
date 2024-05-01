import { View, Text, StyleSheet, Modal, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import { PasswordField, InputField } from '@/components/InputField';
import { GrayButton, BlueButton} from '@/components/MyButton';
import Separator from '@/components/Separator';
import { router, useFocusEffect } from 'expo-router';
import { useAuth } from '@/components/AuthContext';
import { getItem, getItemAsync } from 'expo-secure-store';


import { BASE_URL } from '../../constants/Database'

export default function Login() {
    const [username, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(' ');
    const { onLogin, authState } = useAuth();
    
    const register = () => {
        console.log('register');
        router.replace('/register');
    }
    
    const login = async () => {
        console.log('login button pressed');
        response = await onLogin(username, password)
        setError(response)
    };

    // useFocusEffect(() => {
    //     getItemAsync('token')
    //         .then((token) => {
    //             console.log(token)
    //             router.replace('/')
    //         })
    //         .catch((error) => {
    //             console.log('token not found')
    //         })
    
    // })

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
                        <Text style={styles.title}>Log In</Text>
                        <Text style={styles.error}>{error}</Text>
                        <InputField label={"username"} placeholder={"Username"} value={username} onChangeText={(text) => setUser(text)}/>
                        <PasswordField name={"password"} value={password} onChangeText={(text) => setPassword(text)}/>
                    </View>
                </KeyboardAvoidingView>
                <View style={{backgroundColor: 'white', alignItems: 'center', paddingBottom: '10%', width: '100%'}}>
                    <BlueButton title="Log In" onPress={login} ></BlueButton>
                    <Separator text="Or"/>
                    <GrayButton title="Sign Up" onPress={register}></GrayButton>
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