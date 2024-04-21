import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Counter ({quantity, price}) {
    const [counter, setCounter] = useState(quantity)
    const [totalPrice, setTotalPrice] = useState(price * quantity)
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
        <View style={styles.base}>
            <Text style={styles.text}>x {quantity}</Text>
            <Text style={styles.text}>${totalPrice.toFixed(2)}</Text>
            <View style={styles.quantityBox}>
                <Pressable style={styles.increment} onPress={onIncrement}>
                    <Text style={styles.text}>+</Text>
                </Pressable>
                {/* <View style={styles.circle}>
                    <Text style={styles.text}>{counter}</Text>
                </View> */}
                <Pressable style={styles.decrement} onPress={onDecrement}>
                    <Text style={styles.text}>-</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    base: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    
    increment: {
        flex: 1,
        backgroundColor: '#F4F5F4',
        borderRadius: 5,
        justifyContent: 'center',


    },
    decrement: {
        flex: 1,
        backgroundColor: '#F4F5F4',
        borderRadius: 5,
        alignContent: 'center',

    },
    
    quantityBox: {
        flexDirection: 'column',
        width: '22%',
        backgroundColor: '#F4F5F4',
        borderRadius: 5,
        justifyContent: 'flex-end',
        borderColor: 'gray',
        borderWidth: 1,
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