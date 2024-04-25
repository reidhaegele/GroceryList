import React, { createContext, useState, useEffect, useContext} from 'react';
import { useStorageState } from './useStorageState';
import { router } from 'expo-router';
import axios from 'axios'
import { deleteItemAsync, setItemAsync, getItemAsync } from 'expo-secure-store'
import { BASE_URL } from "../constants/Database";



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
      let error
      const result: any = await axios.post(`${BASE_URL}/api/login/`, {
        username: username,
        password: password
      })
      .then(res => {
          setAuthState(true);
          console.log(res.data.message)
          setItemAsync('token', res.data.token)
          router.navigate('/')
          return result
      })
      .catch(e => {
          error = e.response.data.error
      });
      return error
  };
  

  const register = async (username: string, password: string, email: string, firstname: string, lastname: string) => {
    let error
    console.log(email)
    const respone: any = await axios.post(`${BASE_URL}/api/register/`, {  
            username: username,
            password: password,
            first_name: firstname,
            last_name: lastname,
            email: email,
      })
        .then(res => {
            console.log(res.data.message)
            router.replace('/')
            return res.data
        })
        .catch(e => {
          error = e.response.data.error
          console.log(error)
        });
    return error
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


