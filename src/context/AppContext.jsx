import { createContext } from "react";
import { doctors } from "../assets/assets";
import { defaults } from "autoprefixer";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = 'R'

    const value ={
        doctors,currencySymbol
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
 export default AppContextProvider