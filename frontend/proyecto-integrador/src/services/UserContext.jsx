import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ categories, setCategories ] = useState("");
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

//usar el metodo set user
