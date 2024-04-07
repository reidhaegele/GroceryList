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




export const AuthProvider = ({children} : any) => {
  const [authState, setAuthState] = React.useState<{
    token: string | null;
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
    const result: any = await axios.post(`${BASE_URL}/api/login/`, {
          username,
          password
        })
        .then(res => {
            let response = res.data;
            console.log(response);
            setAuthState({
              token: response.token,
              authenticated: true
            });
            return result
        })
        .catch(e => {
            console.log(`login failed ${e}`);
            { /* FIXME: testing shtuff */}
            return {error: true, msg: (e as any).response.data.msg}
        });
      
    router.replace('/');
  };
  

  const register = async (email: string, password: string, username: string, firstname: string, lastname: string) => {
    console.log('register');
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

            return result
        })
        .catch(e => {
            console.log(`register failed ${e}`);
        });
    router.replace('/login');
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



