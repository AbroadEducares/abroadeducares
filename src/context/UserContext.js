'use client'
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Mukul');

  const [MainForm, setMainForm] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser,MainForm,setMainForm}}>
      {children}
    </UserContext.Provider>
  );
};
