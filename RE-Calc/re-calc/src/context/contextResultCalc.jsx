import { useState, createContext } from "react";


// interface ResultCalcContextInterface {
//     colorValueFinal: number,
//     // defaultValue: any,
// }
export const ResultCalcContext = createContext()


export const ResultCalcProvider = ({children}) => {
    const [colorValueFinal, setColorValueFinal ] = useState(3)
    
    console.log(colorValueFinal)
    // setColorValueFinal(33)
    
    return(
        <ResultCalcContext.Provider value={{colorValueFinal}}>
            {children}
        </ResultCalcContext.Provider>
    )
}

// export default ResultCalcProvider