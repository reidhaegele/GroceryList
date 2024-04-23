import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EmailIcon, NameIcon, PasswordIcon } from './Icons';



export function EmailField ({...props}) {

    return (
        <View style={styles.view}>
            <EmailIcon style={styles.emicon}/>
            <TextInput
                label={"email"}
                placeholder={"Email"}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                {...props}
            />
        </View>
    )
}

export function PasswordField ({...props}) {

    return (
        <View style={styles.view}>
            <PasswordIcon style={styles.icon}/>
            <TextInput
                label={"password"}
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                {...props}
            />
        </View>
    )
}







export function InputField ({icon, label, placeholder, ...props}) {

    return (
        <View style={styles.view}>
            {icon || <NameIcon style={styles.icon}/>}
            <TextInput
                label={label}
                placeholder={placeholder}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                {...props}
            />
        </View>
    )

}





const styles = StyleSheet.create({
    icon: {
        fill: '#cccccc',
    },

    emicon: {
        fill: '#dddddd',
        
    },  

    input: {
        width: '66%',
        display: 'flex',
        width: '66%',
        display: 'flex',
        borderColor: 'white',
        fontSize: 16,
        marginLeft: 5,
    },
    view: {
        width: 'auto',
        width: 'auto',
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2,
        marginBottom: 20,
        marginBottom: 20,
        alignItems: 'center',
    }

});

 