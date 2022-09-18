import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ dataProduct, setDataProduct ] = useState([]);

    const idProductFromLocalS = localStorage.getItem("idProduct");
    const [ idProduct, setIDProductLS ] = useState(idProductFromLocalS);

    const setIdProduct= (id)=>{
      localStorage.setItem("idProduct",id)
      setIDProductLS(id);
    }

  return (
    <UserContext.Provider value={{user, setUser, dataProduct, setDataProduct, idProduct, setIdProduct}}>
        {children}
    </UserContext.Provider>
  )
}

//usar el metodo set user
