import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import imageone from '@/assets/images/shoppers1.png';
import imagetwo from '@/assets/images/shoppers2.png';
import { useLayoutEffect } from 'react';
import { getItemAsync } from 'expo-secure-store';
// TODO: Fix image render issues
// TODO: Fix error handling issue
export default function Welcome() {
    const [isPageOne, setIsPageOne] = useState(true);

    // useLayoutEffect(() => {
    //     if (getItemAsync('token')) {
    //         router.replace('/lists')
    //     }
    // })
    const page_one = (
        <View>
            <Text style={styles.text}>GrocerEz helps you create and manage your grocery lists anytime, anywhere. {'\n\n'}This App uses Kroger’s extensive database of products allowing you to shop for in-stock items at a Kroger near you.</Text>            
        </View>
    )

    const page_two = (
        <View>
            <Text style={styles.text}>GrocerEz facilitates seamless list sharing among multiple users, streamlining the grocery shopping experience for households, families, and friends alike.</Text>
        </View>
    )

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={true}
        >
            <View style={styles.container}>
            <Text style={styles.title}>{isPageOne?"Effortless Grocery Planning":"Collaborative Shopping"}</Text>
                <Image
                    source={isPageOne?imageone:imagetwo}
                    style={styles.image}
                />
                <View style={styles.innercontainer}>
                    {isPageOne?page_one:page_two}
                    <View style={styles.buttoncontainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity style={styles.button} onPress={() => setIsPageOne(true)}><FontAwesome name='circle' size={20} color={isPageOne?"gray":"#447F86"}/></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setIsPageOne(false)}><FontAwesome name='circle' size={20} color={isPageOne?"#447F86":"gray"}/></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => router.replace('/register')}><Text style={{color: 'gray', fontWeight: 'bold', fontSize: 20}}>{isPageOne?'Skip':'Register'}</Text></TouchableOpacity>
                    </View>
                </View>
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
        backgroundColor: '#CEF7FC',
    }, 
    innercontainer: {
        backgroundColor: 'white',
        alignItems: "center",
        height: '50%',
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '5%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .3,
        shadowRadius: 10,
    },
    buttoncontainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '15%',
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
    },
    keycontainer: {
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "100%",
        zIndex: 1,
    },
    text: {
        fontSize: 22,
        color: '#447F86',
        fontWeight: 'bold',
        marginTop: 20,
    },
    title: {
        fontSize: 25,
        color: '#447F86',
        fontWeight: 'bold',
        position: 'absolute',
        top: '8%',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: "85%",
        height: '39%',
        marginLeft: "auto",
        marginRight: "auto",
    },
});