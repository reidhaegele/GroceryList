import { Pressable, StyleSheet, Text, View  } from 'react-native';
import Counter from '@/components/Counter';




export default function ItemCard({name, price, quantity}) {
    // const [quantity, setQuantity] = useState(quantity)
    
    return (
        <View style={styles.container}>
            <Pressable style={styles.container2}>
                <Text style={styles.name}>{name}</Text><Text style={styles.price}>Price: ${price}</Text>
            </Pressable>
            <Counter quantity={quantity} />
        </View>
    
    )
}




const styles = StyleSheet.create({
    container2: {
        width: '80%',
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        flex: 1,
    }, 
    container: {
        width: '80%',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#F5F4F4'
    }, 
    
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 20,

    },

    quantityBox: {
        flexDirection: 'columm',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',

    }
});