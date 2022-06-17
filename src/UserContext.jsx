import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children})=>{
    const [user , setUser] = useState(true);
    
     const value={
         user ,
         setUser
     }
    return<UserContext.Provider value={value}>{children}</UserContext.Provider>
}