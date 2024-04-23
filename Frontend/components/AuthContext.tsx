import React, { createContext, useState, useEffect, useContext} from 'react';
import { useStorageState } from './useStorageState';
import { router } from 'expo-router';
import axios from 'axios'
import { deleteItemAsync, setItemAsync, getItemAsync } from 'expo-secure-store'
const BASE_URL = "http://127.0.0.1:8000";

interface userTokenType {
  token: string;
}

export interface AuthContextType {
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
  onRegister?: (email: string, password: string, username: string, firstname: string, lastname: string) => Promise<any>;
  authState?: {token: string | null; authenticated: boolean | null };
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
  const [authState, setAuthState] = React.useState<{
    token: tokenType | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null    
  });
  
  useEffect (() => {
    const loadToken = async () => {
      const token = await getItemAsync('test');
      console.log("stored:", token);

      if (token) {
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    }
    loadToken();
  }, [])

  const login = async (username: string, password: string) => {
    console.log('login');
    let response
    const result: any = await axios.post(`${BASE_URL}/api/login/`, {
          username,
          password
        })
        .then(res => {
            let response = res.data;
            console.log(response);
            console.log(result);
            setAuthState({
              token: response.token,
              authenticated: true
            });
            return result
        })
        .catch(e => {
            console.log(`login failed ${e}`);
            response = e.response.data.error
        });
    return response
  };
  

  const register = async (email: string, password: string, username: string, firstname: string, lastname: string) => {
    console.log('registering');
    let response
    const result: any = await axios.post(`${BASE_URL}/api/register/`, {
            email,
            password,
            username,
            firstname,
            lastname
        })
        .then(res => {
            let response = res.data;
            console.log(response);
            setAuthState({
              token: response.token,
              authenticated: true
            });
            router.replace('/');
            return result
        })
        .catch(e => {
            console.log(`register failed ${e.response.data.error}`);
            response = e.response.data.error
        });
        return response
  };

  const logout = async () => {
    await deleteItemAsync('test');
    setAuthState({
      token: null,
      authenticated: false
    });
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


