import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Counter ({quantity}) {
    const [counter, setCounter] = useState(quantity)

    const onIncrement = () => {
        setCounter(counter + 1)
    }

    const onDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
        else {
            setCounter(0)
        }
    }

    return (
        <View style={styles.quantityBox}>
            <Pressable style={styles.increment} onPress={onIncrement}>
                <Text style={styles.text}>+</Text>
            </Pressable>
            <View style={styles.circle}>
                <Text style={styles.text}>{counter}</Text>
            </View>
            <Pressable style={styles.decrement} onPress={onDecrement}>
                <Text style={styles.text}>-</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    increment: {
        flex: 1,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        justifyContent: 'center',

    },
    decrement: {
        flex: 1,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        alignContent: 'center',

    },
    
    quantityBox: {
        flexDirection: 'column',
        width: '15%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        justifyContent: 'flex-end',
        
    },

    text: {
        fontSize: 20,
        alignSelf: 'center',
    },
    circle: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20,
        width: '70%',
        alignSelf: 'center',
    }
});