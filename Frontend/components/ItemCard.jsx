import { Pressable, StyleSheet, Text  } from 'react-native';


export default function ItemCard({name, price}) {
    return (
    
        <Pressable style={styles.container}>
            <Text style={styles.name}>{name}</Text><Text style={styles.price}>${price}</Text>
        </Pressable>
    
    )
}



const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'gray',
        alignSelf: 'center',
    }, 
    
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 20,
        marginLeft: 'auto',
    }
});