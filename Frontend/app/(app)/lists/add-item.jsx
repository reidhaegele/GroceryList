import { View, Text, TextInput, Pressable, StyleSheet, Switch } from 'react-native';
import { useState } from 'react'; 
import axios from 'axios';
import { BASE_URL } from '../../../constants/Database';
import ProductSearch from '@/components/kroger/products/ProductSearchBar';
import { getItemAsync } from 'expo-secure-store';
import { useLocalSearchParams, router } from 'expo-router';
import ToggleButton from "@/components/ToggleButton";

export default function AddItem() {
    const [name, onChangeName] = useState('')
    const [price, onChangePrice] = useState('')
    const [category, onChangeCategory] = useState('')
    const [quantity, onChangeQuantity] = useState('')
    const [items, setItems] = useState([])
    const [isEnabled, setIsEnabled] = useState(true);
    const params = useLocalSearchParams();
    const { listId } = params;
    const onAdd = async () => {
        if (name === '' || price === '' || category === '' || quantity === '') {
            console.log('missing fields')

        }
        else {
            console.log(name, price, category, quantity, listId)
            let token = await getItemAsync('token')
            console.log(token)
            const result = await axios.post(`${BASE_URL}/addItem/`, 
                {
                    listId: listId,
                    itemName: name,
                    itemPrice: price,
                    itemCategory: category,
                    itemQuantity: quantity
                }, {
                headers: {
                    'Authorization': `Token ${token}`
                },

            }).then((res) => {
                console.log(res.data)
                onClose()
                alert('Item Added')
            }
            ).catch((error) => {
                console.log(error.response)
        })
        }

    }

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    return (
        <View style={styles.basecontainer}>

            <ToggleButton left={"Add an Item"} right={"Product Search"} onPress={toggleSwitch} isOn={isEnabled}/>
            {!isEnabled ? <ProductSearch onAdd={onAdd}/> : 

            
            <View style={styles.container}>
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
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    basecontainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        
        alignItems: 'center',
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
        backgroundColor: '#447F86',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    }
})