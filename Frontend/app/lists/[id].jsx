import { View, Text, Pressable, StyleSheet, FlatList, SectionList } from 'react-native';
import { useState, useEffect } from 'react';
import { useLocalSearchParams, Stack, useNavigation } from 'expo-router';
import ItemCard from '@/components/ItemCard';

// const header = ({navigation, route, options, back }) => {
//   const title = getHEaderTitle(options, route.name)

//   return (
//     <MyHeader title={title} leftButton={back ? }
//   )
// }


export default function EditList() {
  

  const [items, setItems] = useState([
    {
      name: 'Apple',
      price: '0.99',
      category: 'Produce',
      id: 1,
    },

    {
      name: 'Banana',
      price: '0.50',
      category: 'Produce',
      id: 6,
    },

    {
      name: 'Milk',
      price: '2.50',
      category: 'Dairy',
      id: 2,
    },

    {
      name: 'Eggs',
      price: '1.99',
      category: 'Dairy',
      id: 5,
    },

    {
      name: 'Bread',
      price: '2.00',
      category: 'Bakery',
      id: 3,
    },

    {
      name: 'Baguette',
      price: '3.00',
      category: 'Bakery',
      id: 4,
    }
  ]);
  const [refreshing, setRefreshing] = useState(false);

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

  
  
//   useEffect(() => {
//     AsyncStorage.getItem('lists').then((data) => {
//       if (data) {
//         setlists(JSON.parse(data));
//       }
//     });
//   }, []);

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
          <ItemCard name={item.name} price={item.price} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
      />
    </View>
  )
}



styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
  },

});