import Container from '@/components/Container';
import Separator from '@/components/Separator';
import { View, Text, Button, Image, StyleSheet, Dimensions, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';



export default function Layout() {
    return (
        
        <View 
            style={styles.container}>
            <ImageBackground
                source={require('@/assets/images/grocery.jpg')}
                style={styles.background}
            >
                <Slot></Slot>
            </ImageBackground>                                                                                    
        </View>


        
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,

    }, 
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    // circleLogo: {
    //     height: Dimensions.get('window').width * 0.3,
    //     width: Dimensions.get('window').width * 0.3,
    //     borderRadius: Dimensions.get('window').width * 0.3 / 2,
    //     backgroundColor: 'black',
    // },
    // containerShadow: {
    //     height: Dimensions.get('window').width * 0.86,
    //     width: Dimensions.get('window').width * 0.43,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#ffffff',
    //     borderRadius: 10, 
    // },
    // boxShadow: {
    //     shadowColor: '#171717', 
    //     shadowOffset: { width: -2, height: 4},
    //     shadowOpacity: 0.2,
    //     shadowRadius: 3,
    // }, 
    background: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    ccontainer: {
        flex: 1,
        height: '46%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10, 
    },

});

