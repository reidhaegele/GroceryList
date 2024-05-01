
import { View, Text, Pressable, StyleSheet, FlatList, SectionList, Modal } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { useLocalSearchParams, useNavigation, router, Stack, useFocusEffect } from 'expo-router';
import ItemCard from '@/components/ItemCard';
import axios from 'axios';
import { BASE_URL } from '../../../constants/Database';
import { getItemAsync, getItem } from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';
import AddItemModal from '@/components/AddItemModal';
import Separator from '@/components/Separator';

export default function EditList() {

  const [items, setItems] = useState([]);
  // const [items, setItems] = useState([
  //   {
  //     name: 'Apple',
  //     price: '0.99',
  //     category: 'Produce',
  //     id: 1,
  //     quantity: 3,
  //   },

  //   {
  //     name: 'Banana',
  //     price: '0.50',
  //     category: 'Produce',
  //     id: 6,
  //     quantity: 6,
  //   },

  //   {
  //     name: 'Milk',
  //     price: '2.50',
  //     category: 'Dairy',
  //     id: 2,
  //     quantity: 1,
  //   },

  //   {
  //     name: 'Eggs',
  //     price: '1.99',
  //     category: 'Dairy',
  //     id: 5,
  //     quantity: 2,
  //   },

  //   {
  //     name: 'Bread',
  //     price: '2.00',
  //     category: 'Bakery',
  //     id: 3,
  //     quantity: 1,
  //   },

  //   {
  //     name: 'Baguette',
  //     price: '3.00',
  //     category: 'Bakery',
  //     id: 4,
  //     quantity: 2,
  //   }
  // ]);
  const [refreshing, setRefreshing] = useState(false);
  const [total, setTotal] = useState(0.00);
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [editMode, setEditMode] = useState(false);
  const [ listName, setListName ] = useState(`List ID: ${id}`);


  useEffect(() => {
    navigation.setOptions({
      title: `${listName}`, 
      headerShown: true, 
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 40,
        color: 'black',
      },
      headerTransparent: false,
      
     });
     }, [navigation]);
  
  useFocusEffect(
      useCallback(() => {
        onRefresh();
      }, [])
  );


  const onRefresh = async () => {
    setRefreshing(true);

    // const result = await viewList().then(() => setRefreshing(false));
    const token = getItem('token');
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
      let calcTotal = 0;
      res.data.items.forEach((item) => {
        calcTotal += item.price * item.quantity;
      })
      setTotal(calcTotal.toFixed(2))
      console.log(res.data.listName)
      setListName(res.data.listName)
    
    })
    .catch((error) => {
      setRefreshing(false);
      console.error(error.response.data)
    });

  }

  const onAdd = () => {
    router.navigate({pathname: 'lists/add-item', params: {listId: id}});

  }

  const setEdit = () => {
    setEditMode(!editMode);
  }


  const onDelete = async (name) => {
    console.log('delete');
    const token = await getItemAsync('token');
    const result = await axios.post(`${BASE_URL}/removeItem/`, {
      listId: id, 
      itemName: name, 
    }, {
      headers: {
        'Authorization': `Token ${token}`
    }
    }).then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });

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
      <Stack.Screen
        options={{
          headerRight: () => (<Pressable style={{marginRight: 10}} onPress={setEdit}><Ionicons name='create' size={30} color={editMode ? 'black' : 'gray'} /></Pressable>)
        }}
      />
      <View style={styles.container}>  
        <SectionList
          sections={result}
          keyExtractor={(item, index) => `${item.name}_groceryTable`}
          renderItem={({ item }) => (
            <ItemCard name={item.name} price={item.price} quantity={item.quantity} editMode={editMode} listId={id} onDelete={onDelete}/>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
          SectionSeparatorComponent={({trailingItem, Section }) => trailingItem ? null : (<View style={{height: 1, backgroundColor: 'lightgray', width: '90%', alignSelf: 'center', margin: 5}}/>)}
          
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
    marginTop: 20,
  },

  header: {
    fontSize: 25, 
    fontWeight: 'bold',
    marginLeft: 40,
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