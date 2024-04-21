import React, { createContext, useState, useEffect, useContext} from 'react';
import { useStorageState } from './useStorageState';
import { router } from 'expo-router';
import axios from 'axios'
import { deleteItemAsync, setItemAsync, getItemAsync } from 'expo-secure-store'
const BASE_URL = "http://127.0.0.1:8000";



export interface AuthContextType {
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
  onRegister?: (email: string, password: string, username: string, firstname: string, lastname: string) => Promise<any>;
  authState?: boolean;
}
const AuthContext = createContext<AuthContextType>({});

export const useAuth = () => {
  return useContext(AuthContext);
}


interface tokenType {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
}

export const AuthProvider = ({children} : any) => {
  const [authState, setAuthState] = React.useState(false)
  
  useEffect (() => {
    const loadToken = async () => {
      const token = await getItemAsync('token');
      if (token) {
        setAuthState(true);
      }
    }
    loadToken();
  }, [])

  const login = async (username: string, password: string) => {
    console.log('login');
    console.log(`${BASE_URL}/api/login/`)

      const result: any = await axios.post(`${BASE_URL}/api/login/`, {
        username: username,
        password: password
      })
      .then(res => {
          setAuthState(true);
          setItemAsync('token', res.data.token)
          router.navigate('/')
          return result
      })
      .catch(e => {
          console.log(e.response.data.errors)
      });

    
  };
  

  const register = async (email: string, password: string, username: string, firstname: string, lastname: string) => {

    const respone: any = await axios.post(`${BASE_URL}/api/register/`, {  
            username: username,
            password: password,
            first_name: firstname,
            last_name: lastname,
            email: email,
      })
        .then(res => {
            console.log(res.data.message)
            return res.data
        })
        .catch(e => {
          console.log(e.response.data.errors)
        });
    router.replace('/login')
    
    
  };

  const logout = async () => {
    await deleteItemAsync('token');
    setAuthState(false);
  };

  const value = {
    onRegister: register,
    onLogin: login, 
    onLogout: logout,
    authState: authState,

  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


