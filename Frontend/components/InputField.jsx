import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EmailIcon, NameIcon, PasswordIcon } from './Icons';



export function EmailField (props) {
    // const [text, setText] = React.useState('');
    return (
        <View style={styles.view}>
            <EmailIcon style={styles.icon}/>
            <TextInput
                label={"email"}
                placeholder={"Email"}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                // onChangeText={text => setText()}
                // value={email}
                {...props}
            />
        </View>
    )
}

export function PasswordField (props) {
    // const [text, setText] = React.useState('');
    return (
        <View style={styles.view}>
            <PasswordIcon style={styles.icon}/>
            <TextInput
                label={"password"}
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor="#bfbfbf"
                style={styles.input}
                // onChangeText={text => setText(text)}
                // value={text}
                {...props}
            />
        </View>
    )
}




export function InputField ({icon, label, placeholder, ...props}) {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.view}>
            <NameIcon style={styles.icon}/>
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

    input: {
        width: '66%',
        display: 'flex',
        borderColor: 'white',
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

 