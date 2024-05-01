import React, { useState } from 'react';
import { searchProducts, requestAccessToken } from '../services/krogerAPI';
import { View, Text, Button, FlatList, TextInput, StyleSheet, Pressable } from 'react-native';
import { BASE_URL } from '../../../constants/Database';
export default ProductSearch = ({ accessToken}) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




  const handleSearch = async () => {
    if (!query.trim()) {
      return;
    }

    setLoading(true);

    if (!accessToken) {
      try {
        accessToken = await requestAccessToken();
      } catch (error) {
        console.error(error)
      }
    }

    if (accessToken)
    {
      try {
        const products = await searchProducts(accessToken, query);
        console.log(products);
        setSearchResults(products);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setError(error.message);
        setLoading(false);
      }
    }
  };

  const onAdd = async ({name, price, category, quantity}) => {
    let token = getItem('token')
    console.log(token)
    const result = await axios.post(`${BASE_URL}/addItem/`, 
        {
            listId: 7,
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

    }
    ).catch((error) => {
        console.log(error.response)
    })
  }
  

  // const groupedItems = searchResults.reduce((acc, current) => {
  //   const { category, ...data} = current;
  //   if (!acc[category]) {
  //     acc[category] = {title: category, data:[data]}
  //   }
  //   else { 
  //     acc[category].data.push(data);
  //   }
  //   return acc;
  // }, {});
  // const result = Object.values(groupedItems).map((item) => item);
  // console.log(result);
  const renderItem = ({ item }) => {
    <Pressable style={styles.itemContainer}>
      <Text>{item.productName}</Text>
    </Pressable>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Search</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Enter product name..."
        style={styles.input}
      />
      <Button
        title={loading ? 'Searching...' : 'Search'}
        onPress={handleSearch}
        disabled={loading}
      />
      <Text style={styles.result}>Results:</Text>
      {/* {error && <Text>Error: {error}</Text>} */}
      <FlatList
        keyExtractor={item => item.productId.toString()}
        data={searchResults}
        renderItem={({item}) => <Pressable onPress={() => onAdd({name: item.brand, price: "3.99", category: "Produce", quantity: "1" })} style={styles.itemContainer}><Text>{item.brand} - {item.description}</Text></Pressable>}
      />

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  result: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginTop: 20,
  }, 

  itemContainer: {
    width: '70%',
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 1,
    backgroundColor: 'lightgray',

}, 

});

{/* <div>
<h1>Product Search</h1>
<div>
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Enter product name..."
  />
  <button onClick={handleSearch} disabled={loading}>
    {loading ? 'Searching...' : 'Search'}
  </button>
</div>
{error && <div>Error: {error}</div>}

</div> */}


