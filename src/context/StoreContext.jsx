import { createContext } from "react";
import {jsonData} from '../components/Menus';

export const StoreContext = createContext(null)

const StoreContextProvider=(props) =>{

    const contextValue ={
        jsonData
    }
   return (
    <StoreContext.Provider value ={contextValue}>
        {props.children}
    </StoreContext.Provider>
   )
}
export default StoreContextProvider;