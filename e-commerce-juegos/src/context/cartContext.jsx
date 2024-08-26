import {  createContext, useState } from "react";

const cartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cuenta, setCuenta] = useState(1)

    return(
        <cartContext.Provider value={{cuenta, setCuenta}}>
            {children}
        </cartContext.Provider>
    )
}


export { CartContextProvider, cartContext }