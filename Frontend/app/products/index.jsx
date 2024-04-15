import React, { useState } from 'react';
import { searchProducts, requestAccessToken } from '../services/krogerAPI';

const ProductSearch = ({ accessToken }) => {
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
        setSearchResults(products);
        setLoading(false);
      } catch (error) {
        console.error(error)
        setError(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default ProductSearch;