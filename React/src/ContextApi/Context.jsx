import { createContext, useContext } from "react";
import { useState } from "react";

const MyContext = createContext();
const Context=({children})=>{
    const[count,setCount]=useState(0);
    const value={
        count,
        setCount
    }
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

const useMyContext = () => {
    return useContext(MyContext)
}

// eslint-disable-next-line react-refresh/only-export-components
export { MyContext, useMyContext,Context };