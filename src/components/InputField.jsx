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

export function NameInputField ({icon, ...props}) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.view}>
            <NameIcon style={styles.icon}/>
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


{ /* TODO: Remove manual height & width */ }

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 40,
        display: 'inline-flex',
        fill: '#cccccc',
    
    },

    input: {
        height: 40,
        // width: 273,
        display: 'inline-flex',
        borderColor: 'white',
        selectionColor: 'white',
        outlineStyle: 'none',
        fontSize: 16,
    },
    view: {
        height: 40,
        width: 273, 
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2,
        marginBottom: 10,
        alignItems: 'center',
    }
    // view: {
    //     height: 40, 
    //     width: 273,
    //     // display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     fontFamily: 'sans-serif',
    //     // justifyContent: '',
    //     backgroundColor: 'white',
    //     borderBottomColor: '#cccccc',
    //     borderBottomWidth: 2,
    //     marginBottom: 10,
    //     // borderWidth: 1,
    //     // borderRadius: 10,
    // },

});

 