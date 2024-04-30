import React, { useState } from 'react';
import { searchProducts, requestAccessToken } from '../services/krogerAPI';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';

export default ProductSearch = ({ accessToken }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [searchResults, setSearchResults] = useState([
  //   {
  //     brand: 'Kroger',
  //     description: 'Milk',
  //     productId: 1,
  //   },
  //   {
  //     brand: 'Kroger',
  //     description: 'Eggs',
  //     productId: 2,
  //   },


  // ]);
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
        setSearchResults(products);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setError(error.message);
        setLoading(false);
      }
    }
  };


  const groupedItems = searchResults.reduce((acc, current) => {
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
      <Text style={styles.title}>Product Search</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Enter product name..."
      />
      <Button
        title={loading ? 'Searching...' : 'Search'}
        onPress={handleSearch}
        disabled={loading}
      />

      {/* {error && <Text>Error: {error}</Text>} */}
      <FlatList
        keyExtractor={(item) => item.productId}
        data={result}
        renderItem={({item}) => <Text>{item.brand} - {item.description}</Text>}
      />
      
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
<ul>
  {searchResults.map(product => (
    <li key={product.productId}>
      {product.brand} - {product.description}
    </li>
  ))}
</ul>
</div> */}


