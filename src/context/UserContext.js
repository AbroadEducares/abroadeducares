'use client'
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [MainForm, setMainForm] = useState({
    name: '',
    email: '',
    number: '',
    subject: '', 
    // comments: '',
  });
  return (
    <UserContext.Provider value={{MainForm,setMainForm}}>
      {children}
    </UserContext.Provider>
  );
};
