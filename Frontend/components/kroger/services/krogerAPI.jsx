import axios from 'axios';
import Kroger from '@/constants/Kroger';
import {decode as atob, encode as btoa } from 'base-64';

const CLIENT_ID = Kroger.CLIENT_ID;
const CLIENT_SECRET = Kroger.CLIENT_SECRET;
const BASE_URL = Kroger.BASE_URL;

export const requestAccessToken = async () => {
  const authorization = "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  try {
    const response = await axios.post(`${BASE_URL}/connect/oauth2/token`,'grant_type=client_credentials&scope=product.compact',{headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization': authorization}});
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

export const fetchStoresNearZip = async (accessToken, zipCode) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/locations?filter.zipCode.near=${zipCode}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching stores:', error);
    throw error;
  }
};

export const searchProducts = async (accessToken, query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products?filter.term=${query}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};