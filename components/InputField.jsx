import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EmailIcon, NameIcon, PasswordIcon } from './Icons';



export function EmailField (props) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.view}>
            <EmailIcon style={styles.icon}/>
            <TextInput
                label={"email"}
                placeholder={"Email"}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )
}

export function PasswordField (props) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.view}>
            <PasswordIcon style={styles.icon}/>
            <TextInput
                label={"password"}
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                
            />
        </View>
    )
}

export function InputField ({icon, label, placeholder, ...props}) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.view}>
            <NameIcon style={styles.icon}/>
            <TextInput
                label={label}
                placeholder={placeholder}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )

}


{ /* TODO: Remove manual height & width */ }

const styles = StyleSheet.create({
    icon: {
        // height: 20,
        // width: 40,
        // display: 'flex',
        fill: '#cccccc',

    },

    input: {
        width: '50%',
        display: 'flex',
        borderColor: 'white',
        // selectionColor: 'white',
        // outlineStyle: 'none',
        fontSize: 16,
    },
    view: {
        width: 'auto',
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2,
        marginBottom: 20,
        alignItems: 'center',
    }

});

 