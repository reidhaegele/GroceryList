
import { View, Text, Pressable, StyleSheet, FlatList, SectionList, Modal } from 'react-native';
import { useState, useEffect } from 'react';
import { useLocalSearchParams, useNavigation, router } from 'expo-router';
import ItemCard from '@/components/ItemCard';
import axios from 'axios';
import { BASE_URL } from '../../../constants/Database';
import { getItem } from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';
import AddItemModal from '@/components/AddItemModal';
export default function EditList() {
  
  const [items, setItems] = useState([
    {
      name: 'Apple',
      price: '0.99',
      category: 'Produce',
      id: 1,
      quantity: 3,
    },

    {
      name: 'Banana',
      price: '0.50',
      category: 'Produce',
      id: 6,
      quantity: 6,
    },

    {
      name: 'Milk',
      price: '2.50',
      category: 'Dairy',
      id: 2,
      quantity: 1,
    },

    {
      name: 'Eggs',
      price: '1.99',
      category: 'Dairy',
      id: 5,
      quantity: 2,
    },

    {
      name: 'Bread',
      price: '2.00',
      category: 'Bakery',
      id: 3,
      quantity: 1,
    },

    {
      name: 'Baguette',
      price: '3.00',
      category: 'Bakery',
      id: 4,
      quantity: 2,
    }
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const [total, setTotal] = useState(0.00);
  const navigation = useNavigation();
  const {id} = useLocalSearchParams();

  const viewList = async () => {
    const result = await axios.get(`${BASE_URL}/viewList/`, {
      params: {
        listId: id
      }
    })
  }

  useEffect(() => {
    navigation.setOptions({
      title: `List ${id}`, 
      headerShown: true, 
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 40,
        color: 'black',
      },
      headerTransparent: false,
     });
     }, [navigation]);
  


  const onRefresh = async () => {
    setRefreshing(true);
    // const result = await viewList().then(() => setRefreshing(false));
    const token = getItem('token');
    console.log(token)
    const result = await axios.get(`${BASE_URL}/viewList/`, {
      headers: {
        'Authorization': `Token ${token}`
      },
      params: {
        listId: id
      }
    })
    .then((res) => {
      setRefreshing(false)

      console.log(res.data);
      setItems(res.data.items);
    })
    .catch((error) => {
      setRefreshing(false);
      console.error(error.response.data)
    });

  }

  const onAdd = () => {
    router.push('lists/add-item');

  }

  const groupedItems = items.reduce((acc, current) => {
    const { category, ...data} = current;
    if (!acc[category]) {
      acc[category] = {title: category, data:[data]}
    }
    else { 
      acc[category].data.push(data);
    }
    return acc;
  }, {});
  const result = Object.values(groupedItems).map((item) => item);
  console.log(result);

  return (
    <View style={styles.container}>
      
      <View style={styles.container}>  
        <SectionList
          sections={result}
          keyExtractor={(item, index) => `${item.name}_groceryTable`}
          renderItem={({ item }) => (
            <ItemCard name={item.name} price={item.price} quantity={item.quantity}/>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
          // ListFooterComponent={
          //   <Text style={styles.total}>Total: {total}</Text>
          // }
        />

      </View>
      <Text style={styles.total}>Total: ${total}</Text>
      <View style={styles.buttonBox}>
        
        <Pressable style={styles.startShopping}>
          <Text style={styles.buttonText}>Start Shopping</Text>
        </Pressable>
        <Pressable style={styles.addButton} onPress={onAdd}>
          <Ionicons style={styles.plusIcon} name='add' size={30} color='#00000080'/>
        </Pressable>
      </View>
    </View>
  )
}

styles = StyleSheet.create({
  total: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  header: {
    fontSize: 30, 
    fontWeight: 'bold',
  },

  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 30,
    
  },

  startShopping: {
    backgroundColor: '#58c3ff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    elevation: 2,
    strokeWidth: 1,
    stroke: '#000000',

  },

  buttonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },

  addButton: {
    backgroundColor: '#d9d9d9',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginRight: 10,
  },
  
  modal: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '80%',
    backgroundColor: 'white',
  },
  
  
});