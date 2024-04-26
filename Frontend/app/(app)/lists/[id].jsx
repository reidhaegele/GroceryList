
import { View, Text, Pressable, StyleSheet, FlatList, SectionList } from 'react-native';
import { useState, useEffect } from 'react';
import { useLocalSearchParams, Stack, useNavigation } from 'expo-router';
import ItemCard from '@/components/ItemCard';

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
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();
  const {id} = useLocalSearchParams();
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
    const result = await getLists().then(() => setRefreshing(false));
    setLists(results)
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
        ListFooterComponent={
          <Text style={styles.total}>Total: {total}</Text>
        }
      />
    </View>
  )
}

styles = StyleSheet.create({
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: 10,
  },
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  header: {
    fontSize: 30, 
    fontWeight: 'bold',
  }

});