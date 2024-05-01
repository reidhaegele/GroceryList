import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function ToggleButton({left, right, onPress, isOn}) {
    const onColor = '#447F86';
    const offColor = '#d9d9d9';
    const OnTextColor = 'black';
    const OffTextColor = 'black';



    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <View style={[styles.interior, {backgroundColor: isOn ? onColor : offColor, borderWidth: isOn ? 1 : 0}]}>
                    <Text style={[styles.text, {color: isOn ? OnTextColor : OffTextColor}]}>{left}</Text>
                </View>
                <View style={[styles.interior, {backgroundColor: isOn ? offColor : onColor, borderWidth: isOn ? 0 : 1}]}>
                    <Text style={[styles.text, {color: isOn ? OffTextColor : OnTextColor}]}>{right}</Text>
                </View>
            </Pressable>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

        height: 60,
    },

    button: {
        borderRadius: 5,
        height: 40,
        width: 200,
        flexDirection: 'row',
    }, 

    interior: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',

    }, 

    text: {
        textAlign: 'center', 
        fontSize: 16,
    }
});