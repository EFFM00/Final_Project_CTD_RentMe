import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ dataProduct, setDataProduct ] = useState([]);
  return (
    <UserContext.Provider value={{user, setUser, dataProduct, setDataProduct}}>
        {children}
    </UserContext.Provider>
  )
}

//usar el metodo set user
