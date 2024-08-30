import React ,{ createContext , useContext , useState} from "react";

const StateContext = createContext();
const initialState = {
    chat : false,
    cart : false,
    notification :false,
    userProfile : false,
}

export const ContextProvider = ({ children }) =>{
    const [activeMenu , setActiveMenu] = useState(true);

    return (
        <StateContext.Provider 
        value={{ activeMenu, }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);