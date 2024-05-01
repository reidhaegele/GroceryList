import { Pressable, StyleSheet, Text, View  } from 'react-native';
import Counter from '@/components/Counter';
import { Ionicons } from '@expo/vector-icons';



export default function ItemCard({name, price, quantity, editMode, id, onDelete}) {
    // const [quantity, setQuantity] = useState(quantity)



    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.price}>${price} x {quantity}</Text>
            {  editMode ? 
                <Pressable style={styles.button} onPress={onDelete}>
                    <Ionicons name="trash" size={24} color="black" />
                </Pressable>
            
            : null 
                
            }
        </View>
    
    )
}




const styles = StyleSheet.create({

    container: {
        width: '70%',
        flexDirection: 'row',
        alignSelf: 'center',
        flex: 1,

    }, 
    
    name: {
        flex: 2,
        fontSize: 20,

    },

    price: {
        flex: 1,
        fontSize: 20,
        alignSelf: 'flex-end',
    },

    quantityBox: {
        flexDirection: 'columm',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',

    }
});