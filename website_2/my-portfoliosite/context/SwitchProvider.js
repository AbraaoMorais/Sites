import styles from '../sass/skills.module.scss'
import React, { useState, useEffect, useMemo, createContext, useContext, Children} from 'react';
import SwitchContext from './SwitchContext';
// import { Component } from 'react'

// define cor para estado do botao
export const btnStatus = [ 
    {
        name: "btnActive",
        colors: {
            backgroundImage: "linear-gradient(to left,rgb(33, 71, 197), rgb(96, 30, 145))"
        }
    },
    {
        name: "btnDisabled",
        colors: {
            backgroundImage: "linear-gradient(to right, rgba(13, 82, 151, 30%) 5%, rgba(9, 16, 36, 0.8) 65%, rgb(9, 16, 36) 100%)"
        }
    }
];


//define o contexto
// export const SwitchContext = createContext();

//define o provider
export const SwitchProvider(props){
    
    const [cor, setCor] = useState(true)
    
     return (
         <SwitchContext.Provider value={{ cor, setCor }}>
             {props.children}
         </SwitchContext.Provider>
     )
 }

 //Cria um hook

 export default function useSwitchPage(){
    const context = useContext(SwitchContext);

    //desestrutura os dados recebidos no context 
    // const {cor, setCor} =  context;
    
    return {cor, setCor};
 }
  