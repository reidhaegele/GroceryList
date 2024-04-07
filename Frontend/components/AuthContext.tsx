import React, { createContext, useState} from 'react';
import { useStorageState } from './useStorageState';

interface userTokenType {
  token: string;
}

export interface AuthContextType {
  login: () => void;
  logout: () => void;
  isLoading: boolean;
  userToken: userTokenType | null;

}
export const AuthContext = createContext<AuthContextType | null>(null);

// This hook can be used to access the user info.
// export function useSession() {
//   const value = React.useContext(AuthContext);
//   if (process.env.NODE_ENV !== 'production') {
//     if (!value) {
//       throw new Error('useSession must be wrapped in a <SessionProvider />');
//     }
//   }

//   return value;
// }



export function AuthProvider({children} : React.PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState<userTokenType | null>(null);

  const login = () => {
    setUserToken({token: "i"});
    setIsLoading(false);
  }

  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  )
}

// export function SessionProvider(props: React.PropsWithChildren) {
//   const [[isLoading, session], setSession] = useStorageState('session');

//   return (
//     <AuthContext.Provider
//       value={{
//         signIn: () => {
//           // Perform sign-in logic here
//           setSession('xxx');
//         },
//         signOut: () => {
//           setSession(null);
//         },
//         session,
//         isLoading,
//       }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }
