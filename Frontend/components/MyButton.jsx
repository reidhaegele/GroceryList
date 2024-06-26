import { Pressable, Button, Text, View, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import React from 'react';


export const BlueButton = ({ title, onPress, ...props}) => {
    return (
        
            <TouchableOpacity style={[styles.bluebutton, styles.boxShadow]} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        
    )
}

export const GrayButton = ({ title, onPress, ...props}) => {
    return (
            <TouchableOpacity 
                style={[styles.graybutton, styles.boxShadow]} 
                onPress={onPress}
                
                >

                <Text style={styles.blacktext}>{title}</Text>
            </TouchableOpacity>
    )
}

// <Pressable 
// style={({pressed}) => [
//     {
//       backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
//     },
//     styles.boxShadow,
//     styles.graybutton,
//   ]}>
//   {({pressed}) => (
//     <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
//   )}
// </Pressable>

const styles = StyleSheet.create ({
    bluebutton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#447F86',
        height: 50, 
        width: '79%',
        margin: 10,
    },
    graybutton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#f5f4f4',
        height: 50, 
        width: '79%',
        margin: 10, 
    },
    text: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: '#ffffff',
    }, 
    blacktext: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'normal',
        letterSpacing: 0.25,
        color: '#000000',
    }, 
    boxShadow: {
        shadowColor: '#171717', 
        shadowOffset: { width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});