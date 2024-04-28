import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react'; 
import axios from 'axios';
import { BASE_URL } from '../../../constants/Database';

export default function AddItem() {
    const [name, onChangeName] = useState('')
    const [price, onChangePrice] = useState('')
    const [category, onChangeCategory] = useState('')
    const [quantity, onChangeQuantity] = useState('')
    const [items, setItems] = useState([])

    const onAdd = async () => {
        if (name === '' || price === '' || category === '' || quantity === '') {
            alert('Please fill out all fields')

        }
        else {
            console.log(name, price, category, quantity)
            axios.post(`${BASE_URL}/addItem/`, {
        })
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add an Item</Text>
            <TextInput
                style={styles.input}
                placeholder="Item Name"
                value={name}
                onChangeText={onChangeName}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={price}
                onChangeText={onChangePrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                value={category}
                onChangeText={onChangeCategory}
            />
            <TextInput
                style={styles.input}
                placeholder="Quantity"
                value={quantity}
                onChangeText={onChangeQuantity}
            />
            <Pressable style={styles.button} onPress={onAdd}>
                <Text style={styles.buttonText}>Add Item</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
        marginBottom: 20
    },
    input: {
        width: '80%',
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#58c3ff',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    }
})