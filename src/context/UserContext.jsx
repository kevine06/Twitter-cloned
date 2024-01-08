import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const DataProvider = ({ children }) => {
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
      setAnswers({ ...answers, ...newAnswers })
    }
  
    return (
      <UserContext.Provider value={{ answers, saveAnswers }}>
        {children}
      </UserContext.Provider>
    )
  }