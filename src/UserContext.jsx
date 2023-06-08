import React, { createContext, useReducer } from 'react';
import { userReducer, initialUserState } from './UserReducer';

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
