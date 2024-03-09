import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

// Component for a thin line with text in the middle


export default function Separator({text}) {
    return (
        <View style={styles.container}>
            <View style={styles.thinLine}/>
            <View>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.thinLine}/>
        </View>
    )
}

{ /* TODO: remove hardcoded width values */ }
const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    thinLine: {
        flex: 1,
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1,
        width: 140,
        height: 1,
    },
    text: {
        color: '#bfbfbf',
        fontSize: 20,
        marginHorizontal: 1,
    }
    
});